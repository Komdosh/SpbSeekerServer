package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.user.CreateUserDto
import com.bst.spbseekerserver.model.dto.user.UpdateUserDto
import com.bst.spbseekerserver.model.dto.user.UserDto
import com.bst.spbseekerserver.model.entity.User


interface UserService {
    fun getUserByEmail(email: String): User
    fun deleteUser(id: Long): Long
    fun updateUser(updateUserDto: UpdateUserDto, email: String): UserDto
    fun createUser(createUserDto: CreateUserDto): UserDto
}
