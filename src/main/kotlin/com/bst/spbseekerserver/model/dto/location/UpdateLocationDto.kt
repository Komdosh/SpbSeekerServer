package com.bst.spbseekerserver.model.dto.location

import io.swagger.annotations.ApiModelProperty

data class UpdateLocationDto(
        @ApiModelProperty(notes = "Name of location", required = true)
        val name: String?,
        @ApiModelProperty(notes = "List of images")
        val imgUrlList: List<String> = listOf(),
        @ApiModelProperty(notes = "Full Description of this location")
        val description: String?,
        @ApiModelProperty(notes = "Short Description of this location")
        val shortDescription: String?,
        @ApiModelProperty(notes = "Location latitude", required = true)
        val latitude: Double?,
        @ApiModelProperty(notes = "Location longitude", required = true)
        val longitude: Double?
)
