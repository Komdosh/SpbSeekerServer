package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.location.Location
import com.bst.spbseekerserver.service.api.AutoRoutingService
import com.bst.spbseekerserver.service.api.PointService
import com.bst.spbseekerserver.service.api.RouteService
import org.springframework.stereotype.Service
import kotlin.random.Random


@Service
class AutoRoutingServiceImpl(val pointService: PointService, val routeService: RouteService) : AutoRoutingService {

    companion object {
        const val NEAREST_POINT_METERS = 1000
    }

    override fun generateRoute(latitude: Double, longitude: Double): RouteDto {
        val current = Location(latitude, longitude)
        val nearest = pointService.getNearestPoint(latitude, longitude)

        val points = pointService.getAllPoints()
        val startedPoints = points.filter { Location(it.latitude, it.longitude).distanceTo(Location(nearest.latitude, nearest.longitude)) < NEAREST_POINT_METERS }
        val start = startedPoints[Random.nextInt(startedPoints.size)]

        val left = points.filter { start.longitude < nearest.longitude }

        return RouteDto(0, "", 0, "", "", 0, null, null)
    }

}
