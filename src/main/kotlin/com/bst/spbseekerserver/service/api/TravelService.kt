package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.TravelDto

interface TravelService {
    fun getTravel(id: Long): TravelDto
    fun getAllTravels(): List<TravelDto>
    fun deleteTravel(id: Long): Long
    fun saveTravel(travel: TravelDto): TravelDto
}