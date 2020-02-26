package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.config.OpenAPIConfiguration
import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import com.bst.spbseekerserver.service.api.LocationService
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
@Tag(name = "Location API", description = "REST API for location operations")
@RequestMapping(value = ["/api/v1/location"], produces = [MediaType.APPLICATION_JSON_VALUE])
class LocationController(private val locationService: LocationService) {

    @GetMapping("/{id}")
    @Operation(description = "Fetching one location by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = LocationDto::class)
                        )
                    ])
            ])
    fun get(@PathVariable("id") pointId: Long): LocationDto = locationService.getDto(pointId)

    @GetMapping
    @Operation(description = "Fetching all locations",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                array = ArraySchema(
                                        schema = Schema(implementation = LocationDto::class)
                                )
                        )
                    ])
            ])
    fun getAll(): List<LocationDto> = locationService.getAll()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Create location",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "201",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = LocationDto::class)
                        )
                    ])
            ])
    fun create(@RequestBody createLocationDto: CreateLocationDto): LocationDto = locationService.create(createLocationDto)

    @PutMapping("/{id}")
    @Operation(description = "Update location",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = LocationDto::class)
                        )
                    ])
            ])
    fun update(@PathVariable("id") locationId: Long, @RequestBody updateLocationDto: UpdateLocationDto):
            LocationDto = locationService.update(updateLocationDto, locationId)

    @DeleteMapping("/{id}")
    @Operation(description = "Delete one location by id",
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
    fun delete(@PathVariable("id") locationId: Long): Long = locationService.delete(locationId)

    @GetMapping("/nearest")
    @Operation(description = "Fetch nearest location by coordinates",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = LocationDto::class)
                        )
                    ])
            ])
    fun getNearestPoint(@RequestParam("latitude") latitude: Double,
                        @RequestParam("longitude") longitude: Double): LocationDto = locationService.getNearestPoint(latitude, longitude)
}
