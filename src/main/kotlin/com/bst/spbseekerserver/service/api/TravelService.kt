package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.TravelDto
import com.bst.spbseekerserver.model.entity.Travel

interface TravelService {
    fun getTravel(id: Long): TravelDto
    fun getTravelEntity(id: Long): Travel
    fun getAllTravels(): List<TravelDto>
    fun deleteTravel(id: Long): Long
    fun saveTravel(travel: TravelDto): TravelDto
}