package com.bst.spbseekerserver.model.dto.user

import io.swagger.annotations.ApiModelProperty

data class UpdateUserDto(
        @ApiModelProperty(notes = "Updated email, if null it will not update this field")
        val email: String?,
        @ApiModelProperty(notes = "Updated password, if null it will not update this field")
        val password: String?
)
