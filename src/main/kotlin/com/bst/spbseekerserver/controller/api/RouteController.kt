package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import com.bst.spbseekerserver.service.api.RouteService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "route", description = "Rest API for route operations", tags = ["Route API"])
@RequestMapping(value = ["/api/v1/route"], produces = [MediaType.APPLICATION_JSON_VALUE])
class RouteController(val routeService: RouteService) {
    @ApiOperation(value = "Fetching one route by id", response = RouteDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") routeId: Long): RouteDto = routeService.getDto(routeId)

    @ApiOperation(value = "Fetching all routes", responseContainer = "List", response = RouteDto::class)
    @GetMapping
    fun getAll(): List<RouteDto> = routeService.getAll()

    @PostMapping
    @ApiOperation(value = "Create route", response = RouteDto::class)
    fun create(@RequestBody createRouteDto: CreateRouteDto): RouteDto = routeService.create(createRouteDto)

    @PutMapping("/{id}")
    @ApiOperation(value = "Update route", response = RouteDto::class)
    fun update(@PathVariable("id") routeId: Long, @RequestBody updateRouteDto: UpdateRouteDto):
            RouteDto = routeService.update(updateRouteDto, routeId)

    @ApiOperation(value = "Delete one route by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") routeId: Long): Long = routeService.delete(routeId)
}
