package com.bst.spbseekerserver.model.dto.route.subroute

import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.NotBlank

data class CreateSubRouteDto(
        @field:NotBlank(message = "Name of SubRoute shouldn't be blank")
        @ApiModelProperty(notes = "Provided SubRoute name", required = true)
        val name: String,
        @ApiModelProperty(notes = "List of SubRoute images")
        val imgUrlList: List<String> = listOf(),
        @ApiModelProperty(notes = "Description of SubRoute")
        val description: String,
        @ApiModelProperty(notes = "SubRoute locations")
        val locations: List<CreateLocationDto>
)
