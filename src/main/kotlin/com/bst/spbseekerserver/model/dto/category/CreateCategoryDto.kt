package com.bst.spbseekerserver.model.dto.category

import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.NotBlank

data class CreateCategoryDto(
        @field:NotBlank(message = "Name of category should not be blank")
        @Schema(name = "Provided category name", required = true)
        val name: String,
        @Schema(name = "Image url of category")
        val imgUrl: String = ""
)
