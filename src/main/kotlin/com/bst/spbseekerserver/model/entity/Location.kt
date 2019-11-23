package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import javax.persistence.*

@Entity
data class Location(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        @ElementCollection var imgUrlList: List<String>,
        var description: String,
        var shortDescription: String,
        var latitude: Double,
        var longitude: Double
) : Meta() {

    fun toDto(): LocationDto = LocationDto(
            id = id!!,
            name = name,
            imgUrlList = imgUrlList,
            description = description,
            shortDescription = shortDescription,
            latitude = latitude,
            longitude = longitude,
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateLocationDto) = Location(
                id = null,
                name = dto.name,
                imgUrlList = dto.imgUrlList,
                description = dto.description,
                shortDescription = dto.shortDescription,
                latitude = dto.latitude,
                longitude = dto.longitude
        )

        fun fromDto(dto: UpdateLocationDto, entity: Location): Location {
            entity.name = dto.name ?: entity.name
            entity.imgUrlList = if (dto.imgUrlList.isEmpty()) entity.imgUrlList else dto.imgUrlList
            entity.description = dto.description ?: entity.description
            entity.shortDescription = dto.shortDescription ?: entity.shortDescription
            entity.latitude = dto.latitude ?: entity.latitude
            entity.longitude = dto.longitude ?: entity.longitude
            return entity
        }
    }
}
