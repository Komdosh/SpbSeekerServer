package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.enums.UserRole
import com.bst.spbseekerserver.model.security.AuthProvider
import io.swagger.annotations.ApiModelProperty

data class UserDto(
        @ApiModelProperty(notes = "User Id")
        val id: Long,
        @ApiModelProperty(notes = "Email address")
        val email: String,
        @ApiModelProperty(notes = "User roles set")
        val roles: Set<UserRole>,
        @ApiModelProperty(notes = "Name of user")
        val name: String,
        @ApiModelProperty(notes = "User's profile photo url")
        val photoUrl: String,
        @ApiModelProperty(notes = "Who is authentication provider", allowableValues = "LOCAL,GOOGLE,FACEBOOK")
        val provider: AuthProvider
)
