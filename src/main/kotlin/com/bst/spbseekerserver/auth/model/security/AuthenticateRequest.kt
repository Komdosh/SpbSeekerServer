package com.bst.spbseekerserver.auth.model.security

import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class AuthenticateRequest(
        @Email
        @NotBlank
        @Schema(example = "admin", name = "User's email to login")
        val email: String,
        @NotBlank
        @Schema(example = "123", name = "User's password to login")
        val password: String
)
