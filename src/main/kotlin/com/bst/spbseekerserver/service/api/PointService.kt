package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.point.LocationDto
import com.bst.spbseekerserver.model.entity.Point

interface PointService {
    fun getPoint(id: Long): LocationDto
    fun getPointEntity(id: Long): Point
    fun getAllPoints(): List<LocationDto>
    fun getAllPointsByRouteId(routeId: Long): List<LocationDto>
    fun deletePoint(id: Long): Long
    fun savePoint(location: LocationDto): LocationDto
    fun getNearestPoint(latitude: Double, longitude: Double): LocationDto
}
