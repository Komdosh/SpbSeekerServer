package com.bst.spbseekerserver.model.dto.category

import io.swagger.annotations.ApiModelProperty

data class UpdateCategoryDto(
        @ApiModelProperty(notes = "Provided category name")
        val name: String?,
        @ApiModelProperty(notes = "Image url of category")
        val imgUrl: String?
)
