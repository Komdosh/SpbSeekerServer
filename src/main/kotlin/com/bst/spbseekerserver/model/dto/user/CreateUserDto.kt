package com.bst.spbseekerserver.model.dto.user

import io.swagger.annotations.ApiModelProperty

data class CreateUserDto(
        @ApiModelProperty(notes = "New user email")
        val email: String,
        @ApiModelProperty(notes = "New user password")
        val password: String
)
