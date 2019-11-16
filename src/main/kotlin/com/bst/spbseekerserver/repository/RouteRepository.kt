package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Route
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface RouteRepository : CrudRepository<Route, Long>
