package com.bst.spbseekerserver.model.dto.user

import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class CreateUserDto(
        @field:NotBlank(message = "Email is mandatory")
        @field:Email(message = "Invalid mailbox")
        @ApiModelProperty(notes = "New user email")
        val email: String?,
        @field:NotBlank(message = "Password is mandatory")
        @ApiModelProperty(notes = "New user password")
        val password: String?
)
