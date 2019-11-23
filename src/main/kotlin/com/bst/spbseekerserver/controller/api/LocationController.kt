package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.service.api.AutoRoutingService
import com.bst.spbseekerserver.service.api.LocationService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "location", description = "Rest API for location operations", tags = ["Location API"])
@RequestMapping(value = ["/api/v1/location"], produces = [MediaType.APPLICATION_JSON_VALUE])
class LocationController(val locationService: LocationService, val autoRoutingService: AutoRoutingService) {
    @ApiOperation(value = "Fetching one location by id", response = LocationDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") pointId: Long): LocationDto = locationService.getDto(pointId)

    @ApiOperation(value = "Fetching all locations", responseContainer = "List", response = LocationDto::class)
    @GetMapping
    fun getAll(): List<LocationDto> = locationService.getAll()

    @PostMapping
    @ApiOperation(value = "Create location", response = LocationDto::class)
    fun create(@RequestBody createLocationDto: CreateLocationDto): LocationDto = locationService.create(createLocationDto)

    @PutMapping("/{id}")
    @ApiOperation(value = "Update location", response = LocationDto::class)
    fun update(@PathVariable("id") locationId: Long, @RequestBody updateLocationDto: UpdateLocationDto):
            LocationDto = locationService.update(updateLocationDto, locationId)

    @ApiOperation(value = "Delete one location by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") locationId: Long): Long = locationService.delete(locationId)

    @ApiOperation(value = "Fetch nearest location by coordinates", response = LocationDto::class)
    @GetMapping("/nearest")
    fun getNearestPoint(@RequestParam("latitude") latitude: Double,
                        @RequestParam("longitude") longitude: Double): LocationDto = locationService.getNearestPoint(latitude, longitude)

    @ApiOperation(value = "Generate route automatically (not implemented)", response = RouteDto::class)
    @GetMapping("/auto")
    fun getAuto(@RequestParam("latitude") latitude: Double,
                @RequestParam("longitude") longitude: Double): RouteDto? = autoRoutingService.generateRoute(latitude, longitude)

}
