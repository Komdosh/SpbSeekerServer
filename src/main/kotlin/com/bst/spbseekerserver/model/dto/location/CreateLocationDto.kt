package com.bst.spbseekerserver.model.dto.location

import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateLocationDto(
        @field:NotBlank(message = "Name of location should not be blank")
        @ApiModelProperty(notes = "Name of location", required = true)
        val name: String,
        @ApiModelProperty(notes = "List of images")
        val imgUrlList: List<String> = listOf(),
        @ApiModelProperty(notes = "Full Description of this location")
        val description: String,
        @ApiModelProperty(notes = "Short Description of this location")
        val shortDescription: String,
        @field:NotBlank(message = "latitude should be set")
        @ApiModelProperty(notes = "Location latitude", required = true)
        val latitude: Double,
        @field:NotBlank(message = "longitude should be set")
        @ApiModelProperty(notes = "Location longitude", required = true)
        val longitude: Double
)
