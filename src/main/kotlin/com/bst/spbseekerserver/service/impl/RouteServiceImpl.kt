package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.entity.Route
import com.bst.spbseekerserver.repository.RouteRepository
import com.bst.spbseekerserver.service.api.CategoryService
import com.bst.spbseekerserver.service.api.RouteService
import javassist.NotFoundException
import org.springframework.stereotype.Service
import java.util.*


@Service
class RouteServiceImpl(val routeRepository: RouteRepository, val categoryService: CategoryService) : RouteService {

    override fun getRouteEntity(id: Long): Route {
        logger.debug { "Attempting to fetch route with id $id" }
        val route = routeRepository.findById(id).orElseThrow {
            logger.error { "Route with provided id: $id, doesn't exists" }
            throw NotFoundException("Route with provided id doesn't exists")
        }
        logger.debug { "Fetched route: $route" }
        return route
    }

    override fun getAllRoutes(): List<RouteDto> {
        logger.debug { "Attempting to fetch all routes" }
        val routes = routeRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched routes: $routes" }
        return routes
    }

    override fun deleteRoute(id: Long): Long {
        logger.debug { "Attempting to delete route with id: $id" }
        val route = routeRepository.findById(id).orElseThrow {
            logger.error { "Route with provided id: $id, doesn't exists" }
            throw NotFoundException("Route with provided id doesn't exists")
        }
        routeRepository.delete(route)
        return id
    }

    override fun saveRoute(route: RouteDto): RouteDto {
        logger.debug { "Attempting to save route $route" }
        val category = categoryService.getCategoryDto(route.categoryId)

/*
        var routeEntity = route.toEntity(Category.fromDto(category))
        route.id?.let {
            routeEntity = getRouteEntity(it)
            routeEntity.update(route)
        }

        val savedroute = routeRepository.save(routeEntity).toDto()*/
        //      logger.debug { "Route $savedroute saved successfully" }
        return RouteDto(null, "", 0L, "", "", 0L, Date(), Date())
    }

    override fun getRoute(id: Long): RouteDto {
        return getRouteEntity(id).toDto()
    }

}
