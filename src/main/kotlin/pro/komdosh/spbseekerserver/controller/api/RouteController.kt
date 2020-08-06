package pro.komdosh.spbseekerserver.controller.api

import pro.komdosh.spbseekerserver.config.OpenAPIConfiguration
import pro.komdosh.spbseekerserver.model.dto.route.CreateRouteDto
import pro.komdosh.spbseekerserver.model.dto.route.RouteDto
import pro.komdosh.spbseekerserver.model.dto.route.UpdateRouteDto
import pro.komdosh.spbseekerserver.service.api.AutoRoutingService
import pro.komdosh.spbseekerserver.service.api.RouteService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Route API", description = "REST API for route operations")
@RequestMapping(value = ["/api/v1/route"], produces = [MediaType.APPLICATION_JSON_VALUE])
class RouteController(private val routeService: RouteService, private val autoRoutingService: AutoRoutingService) {

    @GetMapping("/{id}")
    @Operation(description = "Fetching one route by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = RouteDto::class)
                        )
                    ])
            ])
    fun get(@PathVariable("id") routeId: Long): RouteDto = routeService.getDto(routeId)

    @GetMapping
    @Operation(description = "Fetching all routes",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                array = ArraySchema(
                                        schema = Schema(implementation = RouteDto::class)
                                )
                        )
                    ])
            ])
    fun getAll(): List<RouteDto> = routeService.getAll()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Create route",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "201",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = RouteDto::class)
                        )
                    ])
            ])
    fun create(@RequestBody createRouteDto: CreateRouteDto): RouteDto = routeService.create(createRouteDto)

    @PutMapping("/{id}")
    @Operation(description = "Update route",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = RouteDto::class)
                        )
                    ])
            ])
    fun update(@PathVariable("id") routeId: Long, @RequestBody updateRouteDto: UpdateRouteDto):
            RouteDto = routeService.update(updateRouteDto, routeId)

    @DeleteMapping("/{id}")
    @Operation(description = "Delete one route by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = Long::class)
                        )
                    ])
            ])
    fun delete(@PathVariable("id") routeId: Long): Long = routeService.delete(routeId)

    @GetMapping("/auto")
    @Operation(description = "Generate route automatically (not implemented yet)",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = RouteDto::class)
                        )
                    ])
            ])
    fun getAuto(@RequestParam("latitude") latitude: Double,
                @RequestParam("longitude") longitude: Double): RouteDto? = autoRoutingService.generateRoute(latitude, longitude)
}
