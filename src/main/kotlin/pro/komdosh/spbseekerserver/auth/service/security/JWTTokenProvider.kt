package pro.komdosh.spbseekerserver.auth.service.security

import pro.komdosh.spbseekerserver.auth.model.security.UserPrincipal
import pro.komdosh.spbseekerserver.config.AppProperties
import pro.komdosh.spbseekerserver.logger
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

    fun getUsernameFromToken(token: String): String {
        val claims = Jwts.parser().setSigningKey(appProperties.auth.tokenSecret).parseClaimsJws(token).body
        return claims.subject
    }
}
