package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.model.dto.TravelWithPointsDto
import com.bst.spbseekerserver.service.api.PointService
import com.bst.spbseekerserver.service.api.TravelService
import com.bst.spbseekerserver.service.api.TravelWithPointsService
import org.springframework.stereotype.Service


@Service
class TravelWithPointsServiceImpl(val travelService: TravelService, val pointService: PointService) : TravelWithPointsService {
    override fun getTravelWithPoints(id: Long): TravelWithPointsDto {
        val travel = travelService.getTravel(id)
        val points = pointService.getAllPointsByTravelId(id)
        return TravelWithPointsDto(travel, points)
    }
}