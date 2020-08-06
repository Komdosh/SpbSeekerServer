package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.dto.route.RouteDto

interface AutoRoutingService {
    fun generateRoute(latitude: Double, longitude: Double): RouteDto?
}
