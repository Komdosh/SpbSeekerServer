package com.bst.spbseekerserver.model.dto.hint

import io.swagger.annotations.ApiModelProperty

data class UpdateHintDto(
        @ApiModelProperty(notes = "Provided hint name", required = true)
        val name: String?,
        @ApiModelProperty(notes = "Image url of hint")
        val imgUrl: String?,
        @ApiModelProperty(notes = "Full Description of this hint", required = true)
        val description: String?,
        @ApiModelProperty(notes = "Short Description of this hint", required = true)
        val shortDescription: String?
)
