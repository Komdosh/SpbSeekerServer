package com.bst.spbseekerserver.auth.service.api

import com.bst.spbseekerserver.auth.model.dto.CreateUserDto
import com.bst.spbseekerserver.auth.model.dto.UpdateUserDto
import com.bst.spbseekerserver.auth.model.dto.UserDto
import com.bst.spbseekerserver.auth.model.entity.User
import org.springframework.security.access.AccessDeniedException


interface UserService {
    fun getUserByEmail(email: String): User
    fun delete(id: Long): Long
    fun update(updateDto: UpdateUserDto, email: String): UserDto
    fun create(createDto: CreateUserDto): UserDto
    fun getCurrentUser(): User
    @Throws(AccessDeniedException::class)
    fun checkBelong(id: Long?)
}
