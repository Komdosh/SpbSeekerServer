package com.bst.spbseekerserver.model.dto

import io.swagger.annotations.ApiModelProperty
import org.springframework.data.annotation.CreatedBy
import java.util.*

data class RouteWithPointsDto(
        @ApiModelProperty(notes = "Route id")
        val id: Long?,
        @ApiModelProperty(notes = "Provided route name", required = true)
        var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this route", required = true)
        @CreatedBy var adminId: Long,
        @ApiModelProperty(notes = "Image url of route", required = true)
        var imgUrl: String,
        @ApiModelProperty(notes = "Extended description of route", required = true)
        var description: String,
        @ApiModelProperty(notes = "Category id", required = true)
        var categoryId: Long,
        @ApiModelProperty(notes = "Date when administrator created this route")
        val createdDate: Date?,
        @ApiModelProperty(notes = "Date when administrator updated this route")
        val updatedDate: Date?,
        @ApiModelProperty(notes = "List of points", dataType = "List")
        val points: List<PointDto>
) {
    constructor(route: RouteDto, points: List<PointDto>) :
            this(route.id, route.name, route.adminId, route.imgUrl, route.description,
                    route.categoryId, route.createdDate, route.updatedDate, points)
}
