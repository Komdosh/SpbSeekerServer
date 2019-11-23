package com.bst.spbseekerserver.model.dto.hint

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import com.bst.spbseekerserver.model.enums.HintAction
import io.swagger.annotations.ApiModelProperty

data class HintDto(
        @ApiModelProperty(notes = "Hint id")
        val id: Long,
        @ApiModelProperty(notes = "Name of point")
        var name: String,
        @ApiModelProperty(notes = "Image of hint")
        var imgUrl: String,
        @ApiModelProperty(notes = "Full Description of this hint")
        var description: String,
        @ApiModelProperty(notes = "Short Description of this hint")
        var shortDescription: String,
        @ApiModelProperty(notes = "Hint action type")
        var hintAction: HintAction,
        @ApiModelProperty(notes = "Meta information of hint")
        val meta: MetaDto
)
