package com.bst.spbseekerserver.auth.model.security

import io.swagger.v3.oas.annotations.media.Schema

data class AuthenticateRequest(
        @Schema(example = "admin", name = "User's email to login")
        val email: String,
        @Schema(example = "123", name = "User's password to login")
        val password: String
)
