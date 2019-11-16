package com.bst.spbseekerserver.service.security

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.security.UserPrincipal
import io.jsonwebtoken.*
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.security.SignatureException
import java.util.*


@Component
class JWTTokenProvider {

    @Value("\${jwt.secret:sec}")
    lateinit var jwtSecret: String

    @Value("\${jwt.expirationInMs:5000}")
    var jwtExpirationInMs: Int = 0

    fun generateToken(userPrincipal: UserPrincipal): String {

        val roles = userPrincipal.authorities.map { it.authority }

        return Jwts
                .builder()
                .setIssuer("SpbSeeker Server")
                .setSubject(userPrincipal.username)
                .setIssuedAt(Date())
                .setExpiration(Date(Date().time + jwtExpirationInMs * 10000))
                .claim("Roles", roles)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact()
    }

    fun validateToken(jwt: String): Boolean {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(jwt)
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
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).body.subject
    }
}
