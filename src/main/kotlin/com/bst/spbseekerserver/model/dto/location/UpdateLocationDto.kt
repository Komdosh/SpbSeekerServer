package com.bst.spbseekerserver.model.dto.location

import io.swagger.v3.oas.annotations.media.Schema

data class UpdateLocationDto(
        @Schema(name = "Provided location id, it is required for update SubRoute with locations", required = true)
        val id: Long,
        @Schema(name = "Name of location", required = true)
        val name: String?,
        @Schema(name = "List of images")
        val imgUrlList: List<String> = listOf(),
        @Schema(name = "Full Description of this location")
        val description: String?,
        @Schema(name = "Short Description of this location")
        val shortDescription: String?,
        @Schema(name = "Location latitude", required = true)
        val latitude: Double?,
        @Schema(name = "Location longitude", required = true)
        val longitude: Double?
)
