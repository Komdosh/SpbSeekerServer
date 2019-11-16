package com.bst.spbseekerserver.model.dto.point

import com.bst.spbseekerserver.model.entity.Point
import com.bst.spbseekerserver.model.entity.Route
import io.swagger.annotations.ApiModelProperty
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import org.springframework.lang.Nullable
import java.util.*

data class PointDto(
        @ApiModelProperty(notes = "Point id")
        val id: Long?,
        @ApiModelProperty(notes = "Name of point", required = true)
        var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this point", required = true)
        @CreatedBy var adminId: Long,
        @ApiModelProperty(notes = "List of images")
        var imgUrlList: List<String>,
        @ApiModelProperty(notes = "Full Description of this point", required = true)
        var description: String,
        @ApiModelProperty(notes = "Short Description of this point", required = true)
        var shortDescription: String,
        @ApiModelProperty(notes = "Order of this point in route, should be unique", required = true)
        var orderNum: Long,
        @ApiModelProperty(notes = "Longitude of point", required = true)
        var latitude: Double,
        @ApiModelProperty(notes = "Longitude of point", required = true)
        var longitude: Double,
        @ApiModelProperty(notes = "Date when administrator created this point")
        @Nullable @CreationTimestamp val createdDate: Date?,
        @ApiModelProperty(notes = "Date when administrator updated this point")
        @Nullable @UpdateTimestamp val updatedDate: Date?,
        @ApiModelProperty(notes = "Route id that managed this point")
        val routeId: Long?
) {
    fun toEntity(route: Route?): Point = Point(
            id,
            name,
            adminId,
            imgUrlList,
            description,
            shortDescription,
            orderNum,
            latitude,
            longitude,
            route
    )
}
