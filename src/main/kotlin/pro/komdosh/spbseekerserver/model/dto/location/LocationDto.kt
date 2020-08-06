package pro.komdosh.spbseekerserver.model.dto.location

import pro.komdosh.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.v3.oas.annotations.media.Schema

data class LocationDto(
        @Schema(name = "Location id")
        val id: Long,
        @Schema(name = "Name of location")
        val name: String,
        @Schema(name = "List of location images")
        val imgUrlList: List<String>,
        @Schema(name = "Full Description of this location")
        val description: String,
        @Schema(name = "Short Description of this location")
        val shortDescription: String,
        @Schema(name = "Location latitude")
        val latitude: Double,
        @Schema(name = "Location longitude")
        val longitude: Double,
        @Schema(name = "Meta information of location")
        val meta: MetaDto
)
