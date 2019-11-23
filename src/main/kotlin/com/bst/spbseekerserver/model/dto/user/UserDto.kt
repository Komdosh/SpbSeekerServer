package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.enums.UserRole
import io.swagger.annotations.ApiModelProperty

data class UserDto(
        @ApiModelProperty(notes = "Id")
        val id: Long,
        @ApiModelProperty(notes = "Email")
        val email: String,
        @ApiModelProperty(notes = "Roles")
        val roles: Set<UserRole>
)
