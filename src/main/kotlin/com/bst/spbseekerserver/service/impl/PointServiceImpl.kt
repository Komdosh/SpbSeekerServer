package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.PointDto
import com.bst.spbseekerserver.model.entity.Point
import com.bst.spbseekerserver.model.location.Location
import com.bst.spbseekerserver.repository.PointRepository
import com.bst.spbseekerserver.service.api.PointService
import com.bst.spbseekerserver.service.api.TravelService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class PointServiceImpl(val pointRepository: PointRepository, val travelService: TravelService) : PointService {
    override fun getPoint(id: Long): PointDto {
        return getPointEntity(id).toDto()
    }

    override fun getPointEntity(id: Long): Point {
        logger.debug { "Attempting to fetch point with id $id" }
        val point = pointRepository.findById(id).orElseThrow {
            logger.error { "Point with provided id: $id, doesn't exists" }
            throw NotFoundException("Point with provided id doesn't exists")
        }
        logger.debug { "Fetched point: $point" }
        return point
    }

    override fun getAllPoints(): List<PointDto> {
        logger.debug { "Attempting to fetch all points" }
        val points = pointRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched points: $points" }
        return points
    }

    override fun deletePoint(id: Long): Long {
        logger.debug { "Attempting to delete point with id: $id" }
        val point = pointRepository.findById(id).orElseThrow {
            logger.error { "Point with provided id: $id, doesn't exists" }
            throw NotFoundException("Point with provided id doesn't exists")
        }
        pointRepository.delete(point)
        return id
    }

    override fun savePoint(point: PointDto): PointDto {
        logger.debug { "Attempting to save point $point" }

        val travel = point.travelId?.let {
            travelService.getTravelEntity(it)
        }

        var pointEntity = point.toEntity(travel)
        point.id?.let {
            pointEntity = getPointEntity(it)
            pointEntity.update(point)
        }

        val savedPoint = pointRepository.save(pointEntity).toDto()
        logger.debug { "Travel $savedPoint saved successfully" }
        return savedPoint
    }

    override fun getAllPointsByTravelId(travelId: Long): List<PointDto> {
        logger.debug { "Attempting to fetch points by travelId: $travelId" }
        val points = pointRepository.findAllByTravelId(travelId).orElseThrow {
            logger.error { "Points with provided travelId: $travelId, doesn't exists" }
            throw NotFoundException("Points with provided travelId: $travelId, doesn't exists")
        }.map { it.toDto() }
        logger.debug { "Fetched points: $points" }
        return points
    }

    override fun getNearestPoint(latitude: Double, longitude: Double): PointDto {
        val points = pointRepository.findAll()
        val source = Location(latitude, longitude)
        logger.debug { "Attempting to fetch nearest point for location: $source" }
        return points.minBy { Location(it.latitude, it.longitude).distanceTo(source) }?.toDto()
                ?: throw NoSuchElementException("There is no nearest point for source $source")
    }
}