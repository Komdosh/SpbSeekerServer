package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.location.CreateLocationDto
import com.bst.spbseekerserver.model.dto.location.LocationDto
import com.bst.spbseekerserver.model.dto.location.UpdateLocationDto
import com.bst.spbseekerserver.model.entity.Location

interface LocationService : ResourceService<LocationDto, CreateLocationDto, UpdateLocationDto, Location> {
    fun getNearestPoint(latitude: Double, longitude: Double): LocationDto
}
