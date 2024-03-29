package pro.komdosh.spbseekerserver.model.dto.route

import pro.komdosh.spbseekerserver.model.dto.category.CategoryDto
import pro.komdosh.spbseekerserver.model.dto.meta.MetaDto
import pro.komdosh.spbseekerserver.model.dto.route.subroute.SubRouteDto
import pro.komdosh.spbseekerserver.model.enums.PublishState
import pro.komdosh.spbseekerserver.model.enums.SubmissionState
import io.swagger.v3.oas.annotations.media.Schema

data class RouteDto(
        @Schema(name = "Route id")
        val id: Long,
        @Schema(name = "Provided route name")
        val name: String,
        @Schema(name = "Description of route")
        val description: String,
        @Schema(name = "Category of route")
        val category: CategoryDto,
        @Schema(name = "SubRoutes for route")
        val subRoutes: List<SubRouteDto>,
        @Schema(name = "Publishing status"/*, allowableValues = ["DRAFT", "PUBLISHED"]*/, oneOf = [PublishState::class])
        val publishState: PublishState,
        @Schema(name = "Submission status"/*, allowableValues = ["EDITING", "SUBMITTED", "APPROVED", "REJECTED"]*/, oneOf = [SubmissionState::class])
        val submissionState: SubmissionState,
        @Schema(name = "Meta information of route")
        val meta: MetaDto
)
