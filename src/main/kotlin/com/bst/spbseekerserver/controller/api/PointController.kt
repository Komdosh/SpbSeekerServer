package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.PointDto
import com.bst.spbseekerserver.service.api.PointService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "point", description = "Rest API for point operations", tags = ["Point API"])
@RequestMapping(value = ["/api/v1/point"], produces = [MediaType.APPLICATION_JSON_VALUE])
class PointController(val pointService: PointService) {
    @ApiOperation(value = "Fetching one point by id", response = PointDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @GetMapping("/{id}")
    fun get(@PathVariable("id") travelId: Long): PointDto = pointService.getPoint(travelId)

    @ApiOperation(value = "Fetching all travels", responseContainer = "List", response = PointDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @GetMapping
    fun getAll(): List<PointDto> = pointService.getAllPoints()

    @ApiOperation(value = "Save travel", response = PointDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @PostMapping
    fun save(@RequestBody travel: PointDto): PointDto = pointService.savePoint(travel)

    @ApiOperation(value = "Delete one travel by id", response = Long::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") travelId: Long): Long = pointService.deletePoint(travelId)
}