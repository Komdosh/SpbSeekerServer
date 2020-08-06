package pro.komdosh.spbseekerserver.auth.controller.api

import pro.komdosh.spbseekerserver.auth.config.CurrentUser
import pro.komdosh.spbseekerserver.auth.model.dto.CreateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UpdateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UserDto
import pro.komdosh.spbseekerserver.auth.model.security.UserPrincipal
import pro.komdosh.spbseekerserver.auth.service.api.UserService
import pro.komdosh.spbseekerserver.config.OpenAPIConfiguration
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.security.Principal
import javax.validation.Valid

@RestController
@Tag(name = "User API", description = "REST API for users")
@RequestMapping(value = ["/api/v1/user"], produces = [MediaType.APPLICATION_JSON_VALUE])
class UserController(val userService: UserService) {
    @GetMapping
    @PreAuthorize("isAuthenticated()")
    @Operation(description = "Fetching user info",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = UserDto::class)
                        )
                    ])
            ])
    fun userInfo(@CurrentUser userPrincipal: UserPrincipal): UserDto = userService.getUserByEmail(userPrincipal.username).toDto()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Create user",
            responses = [ApiResponse(
                    responseCode = "201",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = UserDto::class)
                        )
                    ])
            ])
    fun create(@RequestBody @Valid createUserDto: CreateUserDto): UserDto = userService.create(createUserDto)

    @PutMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    @Operation(description = "Update user",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "202",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = UserDto::class)
                        )
                    ])
            ])
    fun update(@RequestBody updateUserDto: UpdateUserDto, principal: Principal): UserDto = userService.update(updateUserDto, principal.name)

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(description = "Delete one user by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = UserDto::class)
                        )
                    ])
            ])
    fun delete(@PathVariable("id") userId: Long): Long = userService.delete(userId)
}
