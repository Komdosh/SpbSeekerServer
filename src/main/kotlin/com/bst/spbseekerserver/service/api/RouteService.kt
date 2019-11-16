package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.entity.Route

interface RouteService {
    fun getRoute(id: Long): RouteDto
    fun getRouteEntity(id: Long): Route
    fun getAllRoutes(): List<RouteDto>
    fun deleteRoute(id: Long): Long
    fun saveRoute(route: RouteDto): RouteDto
}
