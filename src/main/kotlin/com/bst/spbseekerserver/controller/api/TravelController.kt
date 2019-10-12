package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.TravelDto
import com.bst.spbseekerserver.model.dto.TravelWithPointsDto
import com.bst.spbseekerserver.service.api.TravelService
import com.bst.spbseekerserver.service.api.TravelWithPointsService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "travel", description = "Rest API for travel operations", tags = ["Travel API"])
@RequestMapping(value = ["/api/v1/travel"], produces = [MediaType.APPLICATION_JSON_VALUE])
class TravelController(val travelService: TravelService, val travelWithPointsService: TravelWithPointsService) {
    @ApiOperation(value = "Fetching one travel by id", response = TravelDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @GetMapping("/{id}")
    fun get(@PathVariable("id") travelId: Long): TravelDto = travelService.getTravel(travelId)

    @ApiOperation(value = "Fetching one travel by id", response = TravelWithPointsDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @GetMapping("/with-points/{id}")
    fun getWithPoints(@PathVariable("id") travelId: Long): TravelWithPointsDto = travelWithPointsService.getTravelWithPoints(travelId)

    @ApiOperation(value = "Fetching all travels", responseContainer = "List", response = TravelDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @GetMapping
    fun getAll(): List<TravelDto> = travelService.getAllTravels()

    @ApiOperation(value = "Save travel", response = TravelDto::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @PostMapping
    fun save(@RequestBody travel:TravelDto): TravelDto = travelService.saveTravel(travel)

    @ApiOperation(value = "Delete one travel by id", response = Long::class)
    @ApiResponses(
            value = [ApiResponse(code = 200, message = "OK"), ApiResponse(code = 404, message = "The resource not found")]
    )
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") travelId: Long): Long = travelService.deleteTravel(travelId)
}