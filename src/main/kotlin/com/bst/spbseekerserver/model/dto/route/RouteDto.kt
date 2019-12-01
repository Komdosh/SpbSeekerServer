package com.bst.spbseekerserver.model.dto.route

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.meta.MetaDto
import com.bst.spbseekerserver.model.dto.route.subroute.SubRouteDto
import com.bst.spbseekerserver.model.enums.PublishState
import com.bst.spbseekerserver.model.enums.SubmissionState
import io.swagger.annotations.ApiModelProperty

data class RouteDto(
        @ApiModelProperty(notes = "Route id")
        val id: Long,
        @ApiModelProperty(notes = "Provided route name")
        val name: String,
        @ApiModelProperty(notes = "Description of route")
        val description: String,
        @ApiModelProperty(notes = "Category of route")
        val category: CategoryDto,
        @ApiModelProperty(notes = "SubRoutes for route")
        val subRoutes: List<SubRouteDto>,
        @ApiModelProperty(notes = "Publishing status", allowableValues = "DRAFT, PUBLISHED")
        val publishState: PublishState,
        @ApiModelProperty(notes = "Submission status", allowableValues = "EDITING, SUBMITTED, APPROVED, REJECTED")
        val submissionState: SubmissionState,
        @ApiModelProperty(notes = "Meta information of route")
        val meta: MetaDto
)
