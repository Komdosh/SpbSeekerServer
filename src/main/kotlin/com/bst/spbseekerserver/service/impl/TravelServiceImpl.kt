package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.TravelDto
import com.bst.spbseekerserver.model.entity.Travel
import com.bst.spbseekerserver.repository.TravelRepository
import com.bst.spbseekerserver.service.api.CategoryService
import com.bst.spbseekerserver.service.api.TravelService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class TravelServiceImpl(val travelRepository: TravelRepository, val categoryService: CategoryService) : TravelService {

    override fun getTravelEntity(id: Long): Travel {
        logger.debug { "Attempting to fetch travel with id $id" }
        val travel = travelRepository.findById(id).orElseThrow {
            logger.error { "Travel with provided id: $id, doesn't exists" }
            throw NotFoundException("Travel with provided id doesn't exists")
        }
        logger.debug { "Fetched travel: $travel" }
        return travel
    }

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
        val category = categoryService.getCategoryEntity(travel.categoryId)


        var travelEntity = travel.toEntity(category)
        travel.id?.let {
            travelEntity = getTravelEntity(it)
            travelEntity.update(travel)
        }

        val savedTravel = travelRepository.save(travelEntity).toDto()
        logger.debug { "Travel $savedTravel saved successfully" }
        return savedTravel
    }

    override fun getTravel(id: Long): TravelDto {
        return getTravelEntity(id).toDto()
    }

}