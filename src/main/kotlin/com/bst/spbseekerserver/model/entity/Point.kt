package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.point.LocationDto
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import java.util.*
import javax.persistence.*

@Entity
data class Point(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        @CreatedBy var adminId: Long,
        @ElementCollection var imgUrlList: List<String>,
        var description: String,
        var shortDescription: String,
        var orderNum: Long,
        var latitude: Double,
        var longitude: Double,
        @CreationTimestamp val createdDate: Date?,
        @UpdateTimestamp val updatedDate: Date?,
        @ManyToOne val route: Route?
) {

    constructor(id: Long?, name: String, adminId: Long, imgUrlList: List<String>, description: String,
                shortDescription: String, orderNum: Long, latitude: Double, longitude: Double, route: Route?)
            : this(id, name, adminId, imgUrlList, description, shortDescription, orderNum, latitude,
            longitude, createdDate = null, updatedDate = null, route = route)

    fun toDto(): LocationDto = LocationDto(
            id,
            name,
            adminId,
            imgUrlList,
            description,
            shortDescription,
            orderNum,
            latitude,
            longitude,
            createdDate!!,
            updatedDate!!,
            route?.id
    )

    fun update(locationDto: LocationDto) {
        name = locationDto.name
        imgUrlList = locationDto.imgUrlList
        description = locationDto.description
        shortDescription = locationDto.shortDescription
        orderNum = locationDto.orderNum
        latitude = locationDto.latitude
        longitude = locationDto.longitude
    }

}
