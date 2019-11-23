package com.bst.spbseekerserver.model.security

data class JwtAuthenticationResponse(
        val accessToken: String,
        val tokenType: String = "Bearer",
        val full: String = "$tokenType $accessToken"
)
