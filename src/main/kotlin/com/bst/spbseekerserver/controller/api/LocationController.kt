package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.service.api.AutoRoutingService
import com.bst.spbseekerserver.service.api.LocationService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Location API", description = "Rest API for location operations")
@RequestMapping(value = ["/api/v1/location"], produces = [MediaType.APPLICATION_JSON_VALUE])
class LocationController(val locationService: LocationService, val autoRoutingService: AutoRoutingService) {
    @Operation(description = "Fetching one location by id")
    @GetMapping("/{id}")
    fun get(@PathVariable("id") pointId: Long): LocationDto = locationService.getDto(pointId)

    @Operation(description = "Fetching all locations")
    @GetMapping
    fun getAll(): List<LocationDto> = locationService.getAll()

    @PostMapping
    @Operation(description = "Create location")
    fun create(@RequestBody createLocationDto: CreateLocationDto): LocationDto = locationService.create(createLocationDto)

    @PutMapping("/{id}")
    @Operation(description = "Update location")
    fun update(@PathVariable("id") locationId: Long, @RequestBody updateLocationDto: UpdateLocationDto):
            LocationDto = locationService.update(updateLocationDto, locationId)

    @Operation(description = "Delete one location by id")
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") locationId: Long): Long = locationService.delete(locationId)

    @Operation(description = "Fetch nearest location by coordinates")
    @GetMapping("/nearest")
    fun getNearestPoint(@RequestParam("latitude") latitude: Double,
                        @RequestParam("longitude") longitude: Double): LocationDto = locationService.getNearestPoint(latitude, longitude)

    @Operation(description = "Generate route automatically (not implemented)")
    @GetMapping("/auto")
    fun getAuto(@RequestParam("latitude") latitude: Double,
                @RequestParam("longitude") longitude: Double): RouteDto? = autoRoutingService.generateRoute(latitude, longitude)

}
