package pro.komdosh.spbseekerserver.model.dto.route.subroute

import pro.komdosh.spbseekerserver.model.dto.location.CreateLocationDto
import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.NotBlank

data class CreateSubRouteDto(
        @field:NotBlank(message = "Name of SubRoute shouldn't be blank")
        @Schema(name = "Provided SubRoute name", required = true)
        val name: String,
        @Schema(name = "List of SubRoute images")
        val imgUrlList: List<String> = listOf(),
        @Schema(name = "Description of SubRoute")
        val description: String,
        @Schema(name = "SubRoute locations")
        val locations: List<CreateLocationDto>
)
