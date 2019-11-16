package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.model.dto.RouteWithPointsDto
import com.bst.spbseekerserver.service.api.PointService
import com.bst.spbseekerserver.service.api.RouteService
import com.bst.spbseekerserver.service.api.RouteWithPointsService
import org.springframework.stereotype.Service


@Service
class RouteWithPointsServiceImpl(val routeService: RouteService, val pointService: PointService) : RouteWithPointsService {
    override fun getRouteWithPoints(id: Long): RouteWithPointsDto {
        val route = routeService.getRoute(id)
        val points = pointService.getAllPointsByRouteId(id)
        return RouteWithPointsDto(route, points)
    }
}
