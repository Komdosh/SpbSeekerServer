package com.bst.spbseekerserver.auth.config.filter

import com.bst.spbseekerserver.auth.service.security.JWTTokenProvider
import com.bst.spbseekerserver.auth.service.security.UserAuthDetailsService
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.filter.OncePerRequestFilter
import java.io.IOException
import javax.servlet.FilterChain
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse


class JwtAuthenticationFilter(
        private val jwtTokenProvider: JWTTokenProvider,
        private val userAuthDetailsService: UserAuthDetailsService
) : OncePerRequestFilter() {

    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        try {
            val jwt = getJwtFromRequest(request)
            if (jwt.isNotEmpty() && jwtTokenProvider.validateToken(jwt)) {
                logger.info("Token is Valid ")
                val userNameFromToken = jwtTokenProvider.getUserNameFromToken(jwt)
                val userDetails = userAuthDetailsService.loadUserByUsername(userNameFromToken)

                val authentication = UsernamePasswordAuthenticationToken(userDetails, null, userDetails.authorities)
                SecurityContextHolder.getContext().authentication = authentication


            }
        } catch (ex: Exception) {
            logger.error("Could not set user authentication in security context", ex)
        }

        filterChain.doFilter(request, response)
    }

    private fun getJwtFromRequest(request: HttpServletRequest): String {
        val bearerToken = request.getHeader("Authorization")

        return if (!bearerToken.isNullOrEmpty() && bearerToken.startsWith("Bearer ")) {
            bearerToken.substring(7, bearerToken.length)
        } else ""
    }
}
