package com.bst.spbseekerserver.model.dto.route.subroute

import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import io.swagger.annotations.ApiModelProperty

data class UpdateSubRouteDto(
        @ApiModelProperty(notes = "Provided SubRoute id, it is required for update SubRoute with routes", required = true)
        val id: Long,
        @ApiModelProperty(notes = "Provided SubRoute name", required = true)
        val name: String?,
        @ApiModelProperty(notes = "List of SubRoute images")
        val imgUrlList: List<String> = listOf(),
        @ApiModelProperty(notes = "Description of SubRoute")
        val description: String?,
        @ApiModelProperty(notes = "SubRoute locations")
        val locations: List<UpdateLocationDto> = listOf()
)
