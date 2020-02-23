package com.bst.spbseekerserver.auth.controller.api

import com.bst.spbseekerserver.auth.model.security.AuthResponse
import com.bst.spbseekerserver.auth.model.security.AuthenticateRequest
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
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


@RestController
@Tag(name = "Auth API", description = "REST API for authenticate users")
@RequestMapping(value = ["/api/v1/auth"], produces = [MediaType.APPLICATION_JSON_VALUE])
class AuthController(
        private val authenticationManager: AuthenticationManager,
        private val jwtTokenProvider: JWTTokenProvider
) {
    @PostMapping("/login")
    @Operation(description = "Authenticate user by email and password",
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = AuthResponse::class)
                        )
                    ])
            ])
    fun authenticateUser(@Valid @RequestBody authenticateRequest: AuthenticateRequest): AuthResponse {
        val authentication = authenticationManager
                .authenticate(UsernamePasswordAuthenticationToken(authenticateRequest.email, authenticateRequest.password))

        SecurityContextHolder.getContext().authentication = authentication

        val token = jwtTokenProvider.generateToken(authentication.principal as UserPrincipal)
        logger.info("Token Created {}", token)
        return AuthResponse(token)
    }
}
