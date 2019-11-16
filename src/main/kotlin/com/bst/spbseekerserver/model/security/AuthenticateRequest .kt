package com.bst.spbseekerserver.model.security

data class AuthenticateRequest(
        val email: String,
        val password: String
)
