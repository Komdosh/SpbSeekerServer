package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.RouteDto

interface AutoRoutingService {
    fun generateRoute(latitude: Double, longitude: Double): RouteDto
}
