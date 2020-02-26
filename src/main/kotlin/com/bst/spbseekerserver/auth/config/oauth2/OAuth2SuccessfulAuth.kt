package com.bst.spbseekerserver.auth.config.oauth2

import com.bst.spbseekerserver.auth.model.security.UserPrincipal
import com.bst.spbseekerserver.auth.model.security.util.CookieUtils.getCookie
import com.bst.spbseekerserver.auth.service.security.JWTTokenProvider
import com.bst.spbseekerserver.config.AppProperties
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler
import org.springframework.stereotype.Component
import org.springframework.web.util.UriComponentsBuilder
import java.io.IOException
import java.net.URI
import javax.servlet.ServletException
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class OAuth2SuccessfulAuth(
        private val tokenProvider: JWTTokenProvider,
        private val appProperties: AppProperties,
        private val cookieOAuth2AuthorizationReqRepo: CookieOAuth2AuthorizationReqRepo)
    : SimpleUrlAuthenticationSuccessHandler() {
    @Throws(IOException::class, ServletException::class)
    override fun onAuthenticationSuccess(request: HttpServletRequest, response: HttpServletResponse, authentication: Authentication) {
        val targetUrl = determineTargetUrl(request, response, authentication)
        if (response.isCommitted) {
            logger.debug("Response has already been committed. Unable to redirect to $targetUrl")
            return
        }
        clearAuthenticationAttributes(request, response)
        redirectStrategy.sendRedirect(request, response, targetUrl)
    }

    override fun determineTargetUrl(request: HttpServletRequest, response: HttpServletResponse, authentication: Authentication): String {
        val redirectUri = getCookie(request, CookieOAuth2AuthorizationReqRepo.REDIRECT_URI_PARAM_COOKIE_NAME)
                .map { obj: Cookie -> obj.value }
        if (redirectUri.isPresent && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw IllegalStateException("Sorry! We've got an Unauthorized Redirect URI and can't proceed with the authentication")
        }
        val targetUrl = redirectUri.orElse(defaultTargetUrl)
        val token = tokenProvider.generateToken(authentication.principal as UserPrincipal)
        return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("token", token)
                .build().toUriString()
    }

    protected fun clearAuthenticationAttributes(request: HttpServletRequest, response: HttpServletResponse) {
        super.clearAuthenticationAttributes(request)
        cookieOAuth2AuthorizationReqRepo.removeAuthorizationRequestCookies(request, response)
    }

    private fun isAuthorizedRedirectUri(uri: String): Boolean {
        val clientRedirectUri = URI.create(uri)
        return appProperties.oauth2.authorizedRedirectUris
                .stream()
                .anyMatch { authorizedRedirectUri: String ->
                    // Only validate host and port. Let the clients use different paths if they want to
                    val authorizedURI = URI.create(authorizedRedirectUri)
                    if (authorizedURI.host.equals(clientRedirectUri.host, ignoreCase = true)
                            && authorizedURI.port == clientRedirectUri.port) {
                        return@anyMatch true
                    }
                    false
                }
    }

}
