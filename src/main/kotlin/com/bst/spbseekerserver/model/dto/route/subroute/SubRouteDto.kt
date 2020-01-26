package com.bst.spbseekerserver.model.dto.route.subroute

import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.meta.MetaDto
import io.swagger.v3.oas.annotations.media.Schema

data class SubRouteDto(
        @Schema(name = "SubRoute id")
        val id: Long,
        @Schema(name = "Provided SubRoute name")
        val name: String,
        @Schema(name = "List of SubRoute images")
        val imgUrlList: List<String>,
        @Schema(name = "Description of SubRoute")
        val description: String,
        @Schema(name = "SubRoute locations")
        val locations: List<LocationDto> = listOf(),
        @Schema(name = "Meta information of route")
        val meta: MetaDto
)
