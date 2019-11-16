package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.security.AuthenticateRequest
import com.bst.spbseekerserver.model.security.JwtAuthenticationResponse
import com.bst.spbseekerserver.model.security.UserPrincipal
import com.bst.spbseekerserver.service.security.JWTTokenProvider
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@Api(value = "authorization", description = "Rest API for authenticate users", tags = ["Authorization API"])
@RequestMapping(value = ["/api/v1/authenticate"], produces = [MediaType.APPLICATION_JSON_VALUE])
class AuthController(
        private val authenticationManager: AuthenticationManager,
        private val jwtTokenProvider: JWTTokenProvider
) {
    @PostMapping
    @ApiOperation(value = "Authenticate user by userName and password", response = JwtAuthenticationResponse::class)
    fun authenticateUser(@RequestBody authenticateRequest: AuthenticateRequest): JwtAuthenticationResponse {
        val authentication = authenticationManager
                .authenticate(UsernamePasswordAuthenticationToken(authenticateRequest.email, authenticateRequest.password))
        val token = jwtTokenProvider.generateToken(authentication.principal as UserPrincipal)
        logger.info("Token Created {}", token)
        return JwtAuthenticationResponse(token)
    }
}
