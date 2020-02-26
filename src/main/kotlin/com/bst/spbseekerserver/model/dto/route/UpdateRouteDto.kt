package com.bst.spbseekerserver.model.dto.route

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.route.subroute.UpdateSubRouteDto
import io.swagger.v3.oas.annotations.media.Schema

data class UpdateRouteDto(
        @Schema(name = "Provided route name", required = true)
        val name: String?,
        @Schema(name = "List of route images")
        val imgUrlList: List<String> = listOf(),
        @Schema(name = "Description of route")
        val description: String?,
        @Schema(name = "Category of route")
        val category: CategoryDto?,
        @Schema(name = "SubRoutes for route")
        val subRoutes: List<UpdateSubRouteDto> = listOf()
)
