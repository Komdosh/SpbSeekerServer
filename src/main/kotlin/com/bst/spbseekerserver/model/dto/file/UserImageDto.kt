package com.bst.spbseekerserver.model.dto.file

import io.swagger.v3.oas.annotations.media.Schema

data class UserImageDto(
        @Schema(name = "Url to fetch uploaded file")
        val url: String
)
