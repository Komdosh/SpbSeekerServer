package pro.komdosh.spbseekerserver.auth.model.security

data class AuthResponse(
        val accessToken: String,
        val tokenType: String = "Bearer",
        val full: String = "$tokenType $accessToken"
)
