package com.bst.spbseekerserver.model.dto.file

import io.swagger.annotations.ApiModelProperty

data class UploadResponseDto(
        @ApiModelProperty(notes = "Url to fetch uploaded file")
        val url: String,
        @ApiModelProperty(notes = "Size of uploaded file")
        val size: Long)
