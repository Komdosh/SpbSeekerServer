package com.bst.spbseekerserver.model.dto.category

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.annotations.ApiModelProperty

data class CategoryDto(
        @ApiModelProperty(example = "5", notes = "Category Id")
        val id: Long,
        @ApiModelProperty(notes = "Provided category name")
        val name: String,
        @ApiModelProperty(notes = "Image url of category")
        val imgUrl: String,
        @ApiModelProperty(notes = "Meta information of category")
        val meta: MetaDto
)
