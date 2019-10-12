package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.PointDto
import com.bst.spbseekerserver.service.api.PointService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "point", description = "Rest API for point operations", tags = ["Point API"])
@RequestMapping(value = ["/api/v1/point"], produces = [MediaType.APPLICATION_JSON_VALUE])
class PointController(val pointService: PointService) {
    @ApiOperation(value = "Fetching one point by id", response = PointDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") pointId: Long): PointDto = pointService.getPoint(pointId)

    @ApiOperation(value = "Fetching all travels", responseContainer = "List", response = PointDto::class)
    @GetMapping
    fun getAll(): List<PointDto> = pointService.getAllPoints()

    @ApiOperation(value = "Save travel", response = PointDto::class)
    @PostMapping
    fun save(@RequestBody point: PointDto): PointDto = pointService.savePoint(point)

    @ApiOperation(value = "Delete one travel by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") pointId: Long): Long = pointService.deletePoint(pointId)
}