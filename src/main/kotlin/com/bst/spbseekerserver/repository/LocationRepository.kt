package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Location
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface LocationRepository : CrudRepository<Location, Long> {
    fun findAllByRouteId(routeId: Long): Optional<List<Location>>
}
