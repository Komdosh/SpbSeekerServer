package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.TravelDto

interface AutoRoutingService {
    fun generateTravel(latitude: Double, longitude: Double): TravelDto
}