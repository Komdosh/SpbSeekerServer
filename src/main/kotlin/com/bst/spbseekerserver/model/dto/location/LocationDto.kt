package com.bst.spbseekerserver.model.dto.location

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.annotations.ApiModelProperty

data class LocationDto(
        @ApiModelProperty(notes = "Location id")
        val id: Long,
        @ApiModelProperty(notes = "Name of location")
        val name: String,
        @ApiModelProperty(notes = "List of images")
        val imgUrlList: List<String>,
        @ApiModelProperty(notes = "Full Description of this location")
        val description: String,
        @ApiModelProperty(notes = "Short Description of this location")
        val shortDescription: String,
        @ApiModelProperty(notes = "Location latitude")
        val latitude: Double,
        @ApiModelProperty(notes = "Location longitude")
        val longitude: Double,
        @ApiModelProperty(notes = "Meta information of location")
        val meta: MetaDto
)
