package pro.komdosh.spbseekerserver.repository

import pro.komdosh.spbseekerserver.model.entity.Route
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface RouteRepository : CrudRepository<Route, Long>
