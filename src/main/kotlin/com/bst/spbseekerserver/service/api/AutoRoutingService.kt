package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.route.RouteDto

interface AutoRoutingService {
    fun generateRoute(latitude: Double, longitude: Double): RouteDto?
}
