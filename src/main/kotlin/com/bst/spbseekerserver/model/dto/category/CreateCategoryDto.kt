package com.bst.spbseekerserver.model.dto.category

import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateCategoryDto(
        @field:NotBlank(message = "Name of category should not be blank")
        @ApiModelProperty(notes = "Provided category name", required = true)
        val name: String,
        @ApiModelProperty(notes = "Image url of category")
        val imgUrl: String = ""
)
