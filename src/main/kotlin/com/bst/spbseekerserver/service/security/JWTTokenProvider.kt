package com.bst.spbseekerserver.service.security

import com.bst.spbseekerserver.config.AppProperties
import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.security.UserPrincipal
import io.jsonwebtoken.*
import org.springframework.stereotype.Component
import java.security.SignatureException
import java.util.*


@Component
class JWTTokenProvider(
        val appProperties: AppProperties
) {
    fun generateToken(userPrincipal: UserPrincipal): String {

        val roles = userPrincipal.authorities.map { it.authority }

        return Jwts
                .builder()
                .setIssuer("SpbSeeker Server")
                .setSubject(userPrincipal.username)
                .setIssuedAt(Date())
                .setExpiration(Date(Date().time + appProperties.auth.tokenExpirationMsec))
                .claim("Roles", roles)
                .signWith(SignatureAlgorithm.HS512, appProperties.auth.tokenSecret)
                .compact()
    }

    fun validateToken(jwt: String): Boolean {
        try {
            Jwts.parser().setSigningKey(appProperties.auth.tokenSecret).parseClaimsJws(jwt)
            return true
        } catch (ex: SignatureException) {
            logger.error("Invalid JWT signature")
        } catch (ex: MalformedJwtException) {
            logger.error("Invalid JWT token")
        } catch (ex: ExpiredJwtException) {
            logger.error("Expired JWT token")
        } catch (ex: UnsupportedJwtException) {
            logger.error("Unsupported JWT token")
        } catch (ex: IllegalArgumentException) {
            logger.error("JWT claims string is empty.")
        }
        return false
    }

    fun getUserNameFromToken(token: String): String {
        return Jwts.parser().setSigningKey(appProperties.auth.tokenSecret).parseClaimsJws(token).body.subject
    }
}
