package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.RouteWithPointsDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.service.api.RouteService
import com.bst.spbseekerserver.service.api.RouteWithPointsService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "route", description = "Rest API for route operations", tags = ["Route API"])
@RequestMapping(value = ["/api/v1/route"], produces = [MediaType.APPLICATION_JSON_VALUE])
class RouteController(val routeService: RouteService, val routeWithPointsService: RouteWithPointsService) {
    @ApiOperation(value = "Fetching one route by id", response = RouteDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") routeId: Long): RouteDto = routeService.getRoute(routeId)

    @ApiOperation(value = "Fetching route by id with points", response = RouteWithPointsDto::class)
    @GetMapping("/with-points/{id}")
    fun getWithPoints(@PathVariable("id") routeId: Long): RouteWithPointsDto = routeWithPointsService.getRouteWithPoints(routeId)

    @ApiOperation(value = "Fetching all routes", responseContainer = "List", response = RouteDto::class)
    @GetMapping
    fun getAll(): List<RouteDto> = routeService.getAllRoutes()

    @ApiOperation(value = "Save route", response = RouteDto::class)
    @PostMapping
    fun save(@RequestBody route: RouteDto): RouteDto = routeService.saveRoute(route)

    @ApiOperation(value = "Delete one route by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") routeId: Long): Long = routeService.deleteRoute(routeId)
}
