package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.TravelWithPointsDto

interface TravelWithPointsService {
    fun getTravelWithPoints(id: Long): TravelWithPointsDto
}