package com.bst.spbseekerserver.model.dto.route.subroute

import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.annotations.ApiModelProperty

data class SubRouteDto(
        @ApiModelProperty(notes = "SubRoute id")
        val id: Long,
        @ApiModelProperty(notes = "Provided SubRoute name")
        val name: String,
        @ApiModelProperty(notes = "List of SubRoute images")
        val imgUrlList: List<String>,
        @ApiModelProperty(notes = "Description of SubRoute")
        val description: String,
        @ApiModelProperty(notes = "SubRoute locations")
        val locations: List<LocationDto> = listOf(),
        @ApiModelProperty(notes = "Meta information of route")
        val meta: MetaDto
)
