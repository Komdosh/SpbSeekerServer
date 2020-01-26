package com.bst.spbseekerserver.model.dto.hint

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import com.bst.spbseekerserver.model.enums.HintAction
import io.swagger.v3.oas.annotations.media.Schema

data class HintDto(
        @Schema(name = "Hint id")
        val id: Long,
        @Schema(name = "Name of point")
        var name: String,
        @Schema(name = "Image of hint")
        var imgUrl: String,
        @Schema(name = "Full Description of this hint")
        var description: String,
        @Schema(name = "Short Description of this hint")
        var shortDescription: String,
        @Schema(name = "Hint action type")
        var hintAction: HintAction,
        @Schema(name = "Meta information of hint")
        val meta: MetaDto
)
