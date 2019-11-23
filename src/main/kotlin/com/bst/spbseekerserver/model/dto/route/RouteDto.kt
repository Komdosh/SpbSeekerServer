package com.bst.spbseekerserver.model.dto.route

import com.bst.spbseekerserver.model.entity.Category
import com.bst.spbseekerserver.model.entity.Route
import io.swagger.annotations.ApiModelProperty
import java.util.*

data class RouteDto(
        @ApiModelProperty(notes = "Route id")
        val id: Long?,
        @ApiModelProperty(notes = "Provided route name", required = true)
        var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this route", required = true)
        var adminId: Long,
        @ApiModelProperty(notes = "Image url of route", required = true)
        var imgUrl: String,
        @ApiModelProperty(notes = "Extended description of route", required = true)
        var description: String,
        @ApiModelProperty(notes = "Category id", required = true)
        var categoryId: Long,
        @ApiModelProperty(notes = "Date when administrator created this route")
        val createdDate: Date?,
        @ApiModelProperty(notes = "Date when administrator updated this route")
        val updatedDate: Date?
) {
    fun toEntity(category: Category): Route = Route(
            id,
            name,
            adminId,
            imgUrl,
            description,
            category
    )
}
