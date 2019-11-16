package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.PointDto
import com.bst.spbseekerserver.model.dto.RouteDto
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
    @ApiOperation(value = "Fetching one point by id", response = PointDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") pointId: Long): PointDto = pointService.getPoint(pointId)

    @ApiOperation(value = "Fetching all points", responseContainer = "List", response = PointDto::class)
    @GetMapping
    fun getAll(): List<PointDto> = pointService.getAllPoints()

    @ApiOperation(value = "Save point", response = PointDto::class)
    @PostMapping
    fun save(@RequestBody point: PointDto): PointDto = pointService.savePoint(point)

    @ApiOperation(value = "Delete one point by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") pointId: Long): Long = pointService.deletePoint(pointId)

    @ApiOperation(value = "Fetch nearest point by coordinates", response = PointDto::class)
    @GetMapping("/nearest")
    fun getNearestPoint(@RequestParam("latitude") latitude: Double, @RequestParam("longitude") longitude: Double): PointDto = pointService.getNearestPoint(latitude, longitude)

    @GetMapping("/auto")
    fun getAuto(@RequestParam("latitude") latitude: Double, @RequestParam("longitude") longitude: Double): RouteDto = autoRoutingService.generateRoute(latitude, longitude)

}
