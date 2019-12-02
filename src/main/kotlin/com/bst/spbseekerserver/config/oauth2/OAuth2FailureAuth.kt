package com.bst.spbseekerserver.config.oauth2

import com.bst.spbseekerserver.model.security.util.CookieUtils.getCookie
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler
import org.springframework.stereotype.Component
import org.springframework.web.util.UriComponentsBuilder
import java.io.IOException
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class OAuth2FailureAuth(
        val cookieOAuth2AuthorizationReqRepo: CookieOAuth2AuthorizationReqRepo
) : SimpleUrlAuthenticationFailureHandler() {

    @Throws(IOException::class)
    override fun onAuthenticationFailure(request: HttpServletRequest, response: HttpServletResponse, exception: AuthenticationException) {
        var targetUrl = getCookie(request, CookieOAuth2AuthorizationReqRepo.REDIRECT_URI_PARAM_COOKIE_NAME)
                .map { obj: Cookie -> obj.value }
                .orElse("/")
        targetUrl = UriComponentsBuilder.fromUriString(targetUrl!!)
                .queryParam("error", exception.localizedMessage)
                .build().toUriString()
        cookieOAuth2AuthorizationReqRepo.removeAuthorizationRequestCookies(request, response)
        redirectStrategy.sendRedirect(request, response, targetUrl)
    }
}
