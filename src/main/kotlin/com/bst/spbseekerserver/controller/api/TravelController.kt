package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.TravelDto
import com.bst.spbseekerserver.model.dto.TravelWithPointsDto
import com.bst.spbseekerserver.service.api.TravelService
import com.bst.spbseekerserver.service.api.TravelWithPointsService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "travel", description = "Rest API for travel operations", tags = ["Travel API"])
@RequestMapping(value = ["/api/v1/travel"], produces = [MediaType.APPLICATION_JSON_VALUE])
class TravelController(val travelService: TravelService, val travelWithPointsService: TravelWithPointsService) {
    @ApiOperation(value = "Fetching one travel by id", response = TravelDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") travelId: Long): TravelDto = travelService.getTravel(travelId)

    @ApiOperation(value = "Fetching travel by id with points", response = TravelWithPointsDto::class)
    @GetMapping("/with-points/{id}")
    fun getWithPoints(@PathVariable("id") travelId: Long): TravelWithPointsDto = travelWithPointsService.getTravelWithPoints(travelId)

    @ApiOperation(value = "Fetching all travels", responseContainer = "List", response = TravelDto::class)
    @GetMapping
    fun getAll(): List<TravelDto> = travelService.getAllTravels()

    @ApiOperation(value = "Save travel", response = TravelDto::class)
    @PostMapping
    fun save(@RequestBody travel:TravelDto): TravelDto = travelService.saveTravel(travel)

    @ApiOperation(value = "Delete one travel by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") travelId: Long): Long = travelService.deleteTravel(travelId)
}