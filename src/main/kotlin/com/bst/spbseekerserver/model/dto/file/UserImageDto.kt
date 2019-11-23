package com.bst.spbseekerserver.model.dto.file

import io.swagger.annotations.ApiModelProperty

data class UserImageDto(
        @ApiModelProperty(notes = "Url to fetch uploaded file")
        val url: String
)
