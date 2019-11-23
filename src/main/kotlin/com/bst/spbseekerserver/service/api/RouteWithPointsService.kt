package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.route.RouteWithPointsDto

interface RouteWithPointsService {
    fun getRouteWithPoints(id: Long): RouteWithPointsDto
}
