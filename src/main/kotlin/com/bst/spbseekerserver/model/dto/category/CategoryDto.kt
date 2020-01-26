package com.bst.spbseekerserver.model.dto.category

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.v3.oas.annotations.media.Schema

data class CategoryDto(
        @Schema(example = "5", name = "Category Id")
        val id: Long,
        @Schema(name = "Provided category name")
        val name: String,
        @Schema(name = "Image url of category")
        val imgUrl: String,
        @Schema(name = "Meta information of category")
        val meta: MetaDto
)
