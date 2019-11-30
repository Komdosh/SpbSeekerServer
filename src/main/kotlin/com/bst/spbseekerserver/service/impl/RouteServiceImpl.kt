package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import com.bst.spbseekerserver.model.entity.Route
import com.bst.spbseekerserver.repository.RouteRepository
import com.bst.spbseekerserver.service.api.RouteService
import com.bst.spbseekerserver.service.api.UserService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class RouteServiceImpl(val routeRepository: RouteRepository, val userService: UserService) : RouteService {

    override fun get(id: Long): Route {
        logger.debug { "Attempting to fetch route with id $id" }
        val route = routeRepository.findById(id).orElseThrow {
            logger.error { "Route with provided id: $id, doesn't exists" }
            throw NotFoundException("Route with provided id doesn't exists")
        }
        logger.debug { "Fetched route: $route" }
        return route
    }

    override fun getAll(): List<RouteDto> {
        logger.debug { "Attempting to fetch all routes" }
        val routes = routeRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched routes: $routes" }
        return routes
    }

    override fun delete(id: Long): Long {
        logger.debug { "Attempting to delete route with id: $id" }

        val entity = get(id)
        userService.checkBelong(entity.createdBy.id)

        return id
    }

    override fun create(createDto: CreateRouteDto): RouteDto {
        logger.debug { "Attempting to create $createDto" }

        val saved = routeRepository.save(Route.fromDto(createDto))
        logger.debug { "Route $saved saved successfully" }
        return saved.toDto()
    }

    override fun update(updateDto: UpdateRouteDto, updatedId: Long): RouteDto {
        logger.debug { "Attempting to update $updateDto" }

        val entity = get(updatedId)
        userService.checkBelong(entity.createdBy.id)

        val saved = routeRepository.save(Route.fromDto(updateDto, get(updatedId)))
        logger.debug { "Route $saved saved successfully" }
        return saved.toDto()
    }

    override fun getDto(id: Long): RouteDto {
        return get(id).toDto()
    }

}
