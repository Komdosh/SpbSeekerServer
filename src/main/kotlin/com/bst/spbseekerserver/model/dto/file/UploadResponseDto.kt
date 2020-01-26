package com.bst.spbseekerserver.model.dto.file

import io.swagger.v3.oas.annotations.media.Schema

data class UploadResponseDto(
        @Schema(name = "Url to fetch uploaded file")
        val url: String,
        @Schema(name = "Size of uploaded file")
        val size: Long)
