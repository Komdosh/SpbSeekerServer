package com.bst.spbseekerserver.auth.model.security

data class JwtAuthenticationResponse(
        val accessToken: String,
        val tokenType: String = "Bearer",
        val full: String = "$tokenType $accessToken"
)
