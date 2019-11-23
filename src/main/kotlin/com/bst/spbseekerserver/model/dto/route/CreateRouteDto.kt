package com.bst.spbseekerserver.model.dto.route

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateRouteDto(
        @field:NotBlank(message = "Name of route shouldn't be blank")
        @ApiModelProperty(notes = "Provided route name", required = true)
        val name: String,
        @ApiModelProperty(notes = "List of route images")
        val imgUrlList: List<String> = listOf(),
        @ApiModelProperty(notes = "Description of route")
        val description: String,
        @ApiModelProperty(notes = "Category of route")
        val category: CategoryDto
)
