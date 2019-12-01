package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.enums.UserRole
import io.swagger.annotations.ApiModelProperty

data class UserDto(
        @ApiModelProperty(notes = "User Id")
        val id: Long,
        @ApiModelProperty(notes = "Email address")
        val email: String,
        @ApiModelProperty(notes = "User roles set")
        val roles: Set<UserRole>,
        @ApiModelProperty(notes = "First name of user")
        val firstName: String,
        @ApiModelProperty(notes = "Last name of user")
        val lastName: String,
        @ApiModelProperty(notes = "User's profile photo")
        val photoUrl: String
)
