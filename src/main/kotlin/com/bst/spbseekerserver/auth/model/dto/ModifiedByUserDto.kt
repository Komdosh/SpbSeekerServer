package com.bst.spbseekerserver.auth.model.dto

import io.swagger.annotations.ApiModelProperty

data class ModifiedByUserDto(
        @ApiModelProperty(notes = "Id of user that modified this resource")
        val id: Long,
        @ApiModelProperty(notes = "Email of user that modified this resource")
        val email: String
)
