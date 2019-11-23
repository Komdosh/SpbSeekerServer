package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.point.LocationDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.service.api.AutoRoutingService
import com.bst.spbseekerserver.service.api.PointService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "point", description = "Rest API for point operations", tags = ["Point API"])
@RequestMapping(value = ["/api/v1/point"], produces = [MediaType.APPLICATION_JSON_VALUE])
class PointController(val pointService: PointService, val autoRoutingService: AutoRoutingService) {
    @ApiOperation(value = "Fetching one point by id", response = LocationDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") pointId: Long): LocationDto = pointService.getPoint(pointId)

    @ApiOperation(value = "Fetching all points", responseContainer = "List", response = LocationDto::class)
    @GetMapping
    fun getAll(): List<LocationDto> = pointService.getAllPoints()

    @ApiOperation(value = "Save point", response = LocationDto::class)
    @PostMapping
    fun save(@RequestBody location: LocationDto): LocationDto = pointService.savePoint(location)

    @ApiOperation(value = "Delete one point by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") pointId: Long): Long = pointService.deletePoint(pointId)

    @ApiOperation(value = "Fetch nearest point by coordinates", response = LocationDto::class)
    @GetMapping("/nearest")
    fun getNearestPoint(@RequestParam("latitude") latitude: Double, @RequestParam("longitude") longitude: Double): LocationDto = pointService.getNearestPoint(latitude, longitude)

    @GetMapping("/auto")
    fun getAuto(@RequestParam("latitude") latitude: Double, @RequestParam("longitude") longitude: Double): RouteDto = autoRoutingService.generateRoute(latitude, longitude)

}
