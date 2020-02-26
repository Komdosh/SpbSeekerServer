package com.bst.spbseekerserver.model.dto.location

import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.NotBlank

data class CreateLocationDto(
        @Schema(name = "Provided location id, it is required for create SubRoute with unsaved locations", required = true)
        val id: Long?,
        @field:NotBlank(message = "Name of location should not be blank")
        @Schema(name = "Name of location", required = true)
        val name: String,
        @Schema(name = "List of images")
        val imgUrlList: List<String> = listOf(),
        @Schema(name = "Full Description of this location")
        val description: String,
        @Schema(name = "Short Description of this location")
        val shortDescription: String,
        @field:NotBlank(message = "latitude should be set")
        @Schema(name = "Location latitude", required = true)
        val latitude: Double,
        @field:NotBlank(message = "longitude should be set")
        @Schema(name = "Location longitude", required = true)
        val longitude: Double
)
