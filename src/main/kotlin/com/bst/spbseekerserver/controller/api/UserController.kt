package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.user.CreateUserDto
import com.bst.spbseekerserver.model.dto.user.UpdateUserDto
import com.bst.spbseekerserver.model.dto.user.UserDto
import com.bst.spbseekerserver.service.api.UserService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.*
import java.security.Principal
import javax.validation.Valid

@RestController
@Api(value = "user", description = "Rest API for users", tags = ["User API"])
@RequestMapping(value = ["/api/v1/user"], produces = [MediaType.APPLICATION_JSON_VALUE])
class UserController(val userService: UserService) {
    @GetMapping
    @ApiOperation(value = "Fetching user info", response = UserDto::class)
    fun userInfo(principal: Principal): UserDto = userService.getUserByEmail(principal.name).toDto()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create user", response = UserDto::class)
    fun create(@RequestBody @Valid createUserDto: CreateUserDto): UserDto = userService.create(createUserDto)

    @PutMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ApiOperation(value = "Update user", response = UserDto::class)
    fun update(@RequestBody updateUserDto: UpdateUserDto, principal: Principal): UserDto = userService.update(updateUserDto, principal.name)

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PreAuthorize("hasAuthority('ADMIN')")
    @ApiOperation(value = "Delete one user by id", response = Boolean::class)
    fun delete(@PathVariable("id") userId: Long): Long = userService.delete(userId)
}
