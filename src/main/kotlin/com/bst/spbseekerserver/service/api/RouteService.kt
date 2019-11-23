package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import com.bst.spbseekerserver.model.entity.Route

interface RouteService : ResourceService<RouteDto, CreateRouteDto, UpdateRouteDto, Route>
