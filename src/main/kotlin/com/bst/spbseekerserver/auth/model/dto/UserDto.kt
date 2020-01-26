package com.bst.spbseekerserver.auth.model.dto

import com.bst.spbseekerserver.auth.model.types.AuthProvider
import com.bst.spbseekerserver.auth.model.types.UserRole
import io.swagger.v3.oas.annotations.media.Schema

data class UserDto(
        @Schema(name = "User Id")
        val id: Long,
        @Schema(name = "Email address")
        val email: String,
        @Schema(name = "User roles set")
        val roles: Set<UserRole>,
        @Schema(name = "Name of user")
        val name: String,
        @Schema(name = "User's profile photo url")
        val photoUrl: String,
        @Schema(name = "Who is authentication provider",  /*allowableValues = ["LOCAL","GOOGLE","FACEBOOK"],*/ oneOf = [AuthProvider::class])
        val provider: AuthProvider
)
