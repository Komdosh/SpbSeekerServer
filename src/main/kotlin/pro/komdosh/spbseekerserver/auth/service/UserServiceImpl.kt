package pro.komdosh.spbseekerserver.auth.service

import pro.komdosh.spbseekerserver.auth.model.dto.CreateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UpdateUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.UserDto
import pro.komdosh.spbseekerserver.auth.model.entity.User
import pro.komdosh.spbseekerserver.auth.repository.UserRepository
import pro.komdosh.spbseekerserver.auth.service.api.UserService
import pro.komdosh.spbseekerserver.logger
import javassist.NotFoundException
import org.springframework.security.access.AccessDeniedException
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.security.Principal


@Service
class UserServiceImpl(val userRepository: UserRepository, val passwordEncoder: PasswordEncoder) : UserService {
    override fun update(updateDto: UpdateUserDto, email: String): UserDto {
        logger.debug { "Attempting to update $updateDto" }
        val user = getUserByEmail(email)
        val savedUser = userRepository.save(User.fromDto(updateDto, user, passwordEncoder))
        logger.debug { "User $savedUser saved successfully" }
        return savedUser.toDto()
    }

    override fun create(createDto: CreateUserDto): UserDto {
        logger.debug { "Attempting to create $createDto" }
        val savedUser = userRepository.save(User.fromDto(createDto, passwordEncoder))
        logger.debug { "User $savedUser saved successfully" }
        return savedUser.toDto()
    }

    override fun getUserByEmail(email: String): User {
        logger.debug { "Attempting to fetch user with email $email" }
        val user = userRepository.findByEmail(email).orElseThrow {
            logger.error { "User with provided email: $email, doesn't exists" }
            throw NotFoundException("User with provided email doesn't exists")
        }
        logger.debug { "Fetched user: $user" }
        return user
    }

    override fun delete(id: Long): Long {
        logger.debug { "Attempting to delete user with id: $id" }
        val user = userRepository.findById(id).orElseThrow {
            logger.error { "User with provided id: $id, doesn't exists" }
            throw NotFoundException("User with provided id doesn't exists")
        }
        userRepository.delete(user)
        return id
    }

    override fun getCurrentUser(): User {
        val principal: Principal? = SecurityContextHolder.getContext().authentication

        if (principal == null || !(principal as Authentication).isAuthenticated) {
            throw AccessDeniedException("There is not authenticated user")
        }

        val email = principal.name
        return getUserByEmail(email)
    }

    override fun checkBelong(id: Long?) {
        if (id != getCurrentUser().id) {
            throw AccessDeniedException("You don't have right's to delete this category")
        }
    }

}
