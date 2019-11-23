package com.bst.spbseekerserver.model.security

import io.swagger.annotations.ApiModelProperty

data class AuthenticateRequest(
        @ApiModelProperty(example = "admin", notes = "User's email to login")
        val email: String,
        @ApiModelProperty(example = "123", notes = "User's password to login")
        val password: String
)
