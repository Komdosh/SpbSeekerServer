package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import com.bst.spbseekerserver.service.api.RouteService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Route API", description = "Rest API for route operations")
@RequestMapping(value = ["/api/v1/route"], produces = [MediaType.APPLICATION_JSON_VALUE])
class RouteController(private val routeService: RouteService) {
    @Operation(description = "Fetching one route by id")
    @GetMapping("/{id}")
    fun get(@PathVariable("id") routeId: Long): RouteDto = routeService.getDto(routeId)

    @Operation(description = "Fetching all routes")
    @GetMapping
    fun getAll(): List<RouteDto> = routeService.getAll()

    @PostMapping
    @Operation(description = "Create route")
    fun create(@RequestBody createRouteDto: CreateRouteDto): RouteDto = routeService.create(createRouteDto)

    @PutMapping("/{id}")
    @Operation(description = "Update route")
    fun update(@PathVariable("id") routeId: Long, @RequestBody updateRouteDto: UpdateRouteDto):
            RouteDto = routeService.update(updateRouteDto, routeId)

    @Operation(description = "Delete one route by id")
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") routeId: Long): Long = routeService.delete(routeId)
}
