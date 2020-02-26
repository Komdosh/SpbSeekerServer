package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.auth.service.api.UserService
import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import com.bst.spbseekerserver.model.entity.Location
import com.bst.spbseekerserver.model.location.Position
import com.bst.spbseekerserver.repository.LocationRepository
import com.bst.spbseekerserver.service.api.LocationService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class LocationServiceImpl(val locationRepository: LocationRepository,
                          val userService: UserService) : LocationService {
    override fun getDto(id: Long): LocationDto {
        return get(id).toDto()
    }

    override fun get(id: Long): Location {
        logger.debug { "Attempting to fetch point with id $id" }
        val point = locationRepository.findById(id).orElseThrow {
            logger.error { "Point with provided id: $id, doesn't exists" }
            throw NotFoundException("Point with provided id doesn't exists")
        }
        logger.debug { "Fetched point: $point" }
        return point
    }

    override fun getAll(): List<LocationDto> {
        logger.debug { "Attempting to fetch all points" }
        val points = locationRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched points: $points" }
        return points
    }

    override fun delete(id: Long): Long {
        logger.debug { "Attempting to delete point with id: $id" }

        val entity = get(id)
        userService.checkBelong(entity.createdBy.id)

        locationRepository.delete(entity)
        return id
    }

    override fun create(createDto: CreateLocationDto): LocationDto {
        logger.debug { "Attempting to create $createDto" }

        val saved = locationRepository.save(Location.fromDto(createDto))
        logger.debug { "Location $saved saved successfully" }
        return saved.toDto()
    }

    override fun update(updateDto: UpdateLocationDto, updatedId: Long): LocationDto {
        logger.debug { "Attempting to update $updateDto" }

        val entity = get(updatedId)
        userService.checkBelong(entity.createdBy.id)

        val saved = locationRepository.save(Location.fromDto(updateDto, get(updatedId)))
        logger.debug { "Location $saved saved successfully" }
        return saved.toDto()
    }

    override fun getNearestPoint(latitude: Double, longitude: Double): LocationDto {
        val points = locationRepository.findAll()
        val source = Position(latitude, longitude)
        logger.debug { "Attempting to fetch nearest point for location: $source" }
        return points.minBy { Position(it.latitude, it.longitude).distanceTo(source) }?.toDto()
                ?: throw NoSuchElementException("There is no nearest point for source $source")
    }
}
