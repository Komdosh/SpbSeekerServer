package com.bst.spbseekerserver.model.dto.hint

import com.bst.spbseekerserver.model.enums.HintAction
import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateHintDto(
        @field:NotBlank(message = "Name of hint should not be blank")
        @ApiModelProperty(notes = "Provided hint name", required = true)
        val name: String,
        @ApiModelProperty(notes = "Image url of hint")
        val imgUrl: String = "",
        @ApiModelProperty(notes = "Full Description of this hint", required = true)
        val description: String,
        @ApiModelProperty(notes = "Short Description of this hint", required = true)
        val shortDescription: String,
        @ApiModelProperty(notes = "Hint action type", required = true)
        val hintAction: HintAction
)
