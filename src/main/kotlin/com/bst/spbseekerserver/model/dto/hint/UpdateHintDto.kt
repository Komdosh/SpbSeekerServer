package com.bst.spbseekerserver.model.dto.hint

import io.swagger.v3.oas.annotations.media.Schema

data class UpdateHintDto(
        @Schema(name = "Provided hint name")
        val name: String?,
        @Schema(name = "Image url of hint")
        val imgUrl: String?,
        @Schema(name = "Full Description of this hint")
        val description: String?,
        @Schema(name = "Short Description of this hint")
        val shortDescription: String?
)
