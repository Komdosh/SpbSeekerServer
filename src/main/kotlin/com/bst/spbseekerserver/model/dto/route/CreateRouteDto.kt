package com.bst.spbseekerserver.model.dto.route

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.route.subroute.CreateSubRouteDto
import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.NotBlank

data class CreateRouteDto(
        @field:NotBlank(message = "Name of route shouldn't be blank")
        @Schema(name = "Provided route name", required = true)
        val name: String,
        @Schema(name = "Description of route")
        val description: String,
        @Schema(name = "Category of route")
        val category: CategoryDto,
        @Schema(name = "SubRoutes for route")
        val subRoutes: List<CreateSubRouteDto>
)
