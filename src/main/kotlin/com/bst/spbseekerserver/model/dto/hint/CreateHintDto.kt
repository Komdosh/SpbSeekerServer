package com.bst.spbseekerserver.model.dto.hint

import com.bst.spbseekerserver.model.enums.HintAction
import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.NotBlank

data class CreateHintDto(
        @field:NotBlank(message = "Name of hint should not be blank")
        @Schema(name = "Provided hint name", required = true)
        val name: String,
        @Schema(name = "Image url of hint")
        val imgUrl: String = "",
        @Schema(name = "Full Description of this hint", required = true)
        val description: String,
        @Schema(name = "Short Description of this hint", required = true)
        val shortDescription: String,
        @Schema(name = "Hint action type", required = true)
        val hintAction: HintAction
)
