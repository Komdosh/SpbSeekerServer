package pro.komdosh.spbseekerserver.auth.service.api

import pro.komdosh.spbseekerserver.auth.model.dto.CreateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UpdateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UserDto
import pro.komdosh.spbseekerserver.auth.model.entity.User
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
