package com.bst.spbseekerserver.auth.model.dto

import io.swagger.annotations.ApiModelProperty

data class CreatedByUserDto(
        @ApiModelProperty(notes = "Id of user that created this resource")
        val id: Long,
        @ApiModelProperty(notes = "Email of user that created this resource")
        val email: String
)
