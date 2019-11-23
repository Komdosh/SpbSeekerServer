package com.bst.spbseekerserver.model.dto.user

import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateUserDto(
        @field:NotBlank(message = "Email is mandatory")
        @ApiModelProperty(notes = "New user email")
        val email: String?,
        @field:NotBlank(message = "Password is mandatory")
        @ApiModelProperty(notes = "New user password")
        val password: String?
)
