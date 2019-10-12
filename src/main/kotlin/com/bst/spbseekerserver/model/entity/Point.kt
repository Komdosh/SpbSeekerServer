package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.PointDto
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
        @ManyToOne val travel: Travel?
) {

    constructor(id: Long?, name: String, adminId: Long, imgUrlList: List<String>, description: String,
                shortDescription: String, orderNum: Long, latitude: Double, longitude: Double, travel: Travel?)
            : this(id, name, adminId, imgUrlList, description, shortDescription, orderNum, latitude,
            longitude, createdDate = null, updatedDate = null, travel = travel)

    fun toDto(): PointDto = PointDto(
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
            travel?.id!!
    )

    fun update(pointDto: PointDto) {
        name = pointDto.name
        imgUrlList = pointDto.imgUrlList
        description = pointDto.description
        shortDescription = pointDto.shortDescription
        orderNum = pointDto.orderNum
        latitude = pointDto.latitude
        longitude = pointDto.longitude
    }

}