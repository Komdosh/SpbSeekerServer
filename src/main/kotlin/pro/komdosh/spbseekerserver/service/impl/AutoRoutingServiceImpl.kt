package pro.komdosh.spbseekerserver.service.impl

import pro.komdosh.spbseekerserver.model.dto.route.RouteDto
import pro.komdosh.spbseekerserver.model.location.Position
import pro.komdosh.spbseekerserver.service.api.AutoRoutingService
import pro.komdosh.spbseekerserver.service.api.LocationService
import org.springframework.stereotype.Service
import kotlin.random.Random


@Service
class AutoRoutingServiceImpl(val locationService: LocationService) : AutoRoutingService {

    companion object {
        const val NEAREST_POINT_METERS = 1000
    }

    override fun generateRoute(latitude: Double, longitude: Double): RouteDto? {
        val current = Position(latitude, longitude)
        val nearest = locationService.getNearestPoint(latitude, longitude)

        val points = locationService.getAll()
        val startedPoints = points.filter { Position(it.latitude, it.longitude).distanceTo(Position(nearest.latitude, nearest.longitude)) < NEAREST_POINT_METERS }
        val start = startedPoints[Random.nextInt(startedPoints.size)]

        val left = points.filter { start.longitude < nearest.longitude }

        return null
    }

}
