package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.enums.UserRole
import io.swagger.annotations.ApiModelProperty

data class UserDto(
        @ApiModelProperty(notes = "Id")
        val id: Long,
        @ApiModelProperty(notes = "Email address")
        val email: String,
        @ApiModelProperty(notes = "User roles set")
        val roles: Set<UserRole>
)
