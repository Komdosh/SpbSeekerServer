package com.bst.spbseekerserver.auth.controller.api

import com.bst.spbseekerserver.auth.model.security.AuthenticateRequest
import com.bst.spbseekerserver.auth.model.security.JwtAuthenticationResponse
import com.bst.spbseekerserver.auth.model.security.UserPrincipal
import com.bst.spbseekerserver.auth.service.security.JWTTokenProvider
import com.bst.spbseekerserver.logger
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@Tag(name = "Auth API", description = "Rest API for authenticate users")
@RequestMapping(value = ["/api/v1/authenticate"], produces = [MediaType.APPLICATION_JSON_VALUE])
class AuthController(
        private val authenticationManager: AuthenticationManager,
        private val jwtTokenProvider: JWTTokenProvider
) {
    @PostMapping
    @Operation(description = "Authenticate user by email and password",
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = JwtAuthenticationResponse::class)
                        )
                    ])
            ])
    fun authenticateUser(@RequestBody authenticateRequest: AuthenticateRequest): JwtAuthenticationResponse {
        val authentication = authenticationManager
                .authenticate(UsernamePasswordAuthenticationToken(authenticateRequest.email, authenticateRequest.password))
        val token = jwtTokenProvider.generateToken(authentication.principal as UserPrincipal)
        logger.info("Token Created {}", token)
        return JwtAuthenticationResponse(token)
    }
}
