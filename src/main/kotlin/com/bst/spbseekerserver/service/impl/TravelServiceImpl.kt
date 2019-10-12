package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.TravelDto
import com.bst.spbseekerserver.repository.TravelRepository
import com.bst.spbseekerserver.service.api.TravelService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class TravelServiceImpl(val travelRepository: TravelRepository) : TravelService {
    override fun getAllTravels(): List<TravelDto> {
        logger.debug { "Attempting to fetch all travels" }
        val travels = travelRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched travels: $travels" }
        return travels
    }

    override fun deleteTravel(id: Long): Long {
        logger.debug { "Attempting to delete travel with id: $id" }
        val travel = travelRepository.findById(id).orElseThrow {
            logger.error { "Travel with provided id: $id, doesn't exists" }
            throw NotFoundException("Travel with provided id doesn't exists")
        }
        travelRepository.delete(travel)
        return id
    }

    override fun saveTravel(travel: TravelDto): TravelDto {
        logger.debug { "Attempting to save travel $travel" }
        val saveTravel = travelRepository.save(travel.toEntity()).toDto()
        logger.debug { "Travel $saveTravel saved successfully" }
        return saveTravel
    }

    override fun getTravel(id: Long): TravelDto {
        logger.debug { "Attempting to fetch travel with id $id" }
        val travel = travelRepository.findById(id).orElseThrow {
            logger.error { "Travel with provided id: $id, doesn't exists" }
            throw NotFoundException("Travel with provided id doesn't exists")
        }
        logger.debug { "Fetched travel: $travel" }
        return travel.toDto()
    }

}