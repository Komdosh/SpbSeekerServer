package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Point
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface PointRepository : CrudRepository<Point, Long> {
    fun findAllByRouteId(routeId: Long): Optional<List<Point>>
}
