package pro.komdosh.spbseekerserver.model.dto.route.subroute

import pro.komdosh.spbseekerserver.model.dto.location.UpdateLocationDto
import io.swagger.v3.oas.annotations.media.Schema

data class UpdateSubRouteDto(
        @Schema(name = "Provided SubRoute id, it is required for update SubRoute with routes", required = true)
        val id: Long,
        @Schema(name = "Provided SubRoute name", required = true)
        val name: String?,
        @Schema(name = "List of SubRoute images")
        val imgUrlList: List<String> = listOf(),
        @Schema(name = "Description of SubRoute")
        val description: String?,
        @Schema(name = "SubRoute locations")
        val locations: List<UpdateLocationDto> = listOf()
)
