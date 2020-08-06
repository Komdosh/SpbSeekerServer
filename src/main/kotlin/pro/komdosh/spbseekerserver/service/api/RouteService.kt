package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.dto.route.CreateRouteDto
import pro.komdosh.spbseekerserver.model.dto.route.RouteDto
import pro.komdosh.spbseekerserver.model.dto.route.UpdateRouteDto
import pro.komdosh.spbseekerserver.model.entity.Route

interface RouteService : ResourceService<RouteDto, CreateRouteDto, UpdateRouteDto, Route>
