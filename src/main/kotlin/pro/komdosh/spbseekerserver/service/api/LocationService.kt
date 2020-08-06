package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.dto.location.CreateLocationDto
import pro.komdosh.spbseekerserver.model.dto.location.LocationDto
import pro.komdosh.spbseekerserver.model.dto.location.UpdateLocationDto
import pro.komdosh.spbseekerserver.model.entity.Location

interface LocationService : ResourceService<LocationDto, CreateLocationDto, UpdateLocationDto, Location> {
    fun getNearestPoint(latitude: Double, longitude: Double): LocationDto
}
