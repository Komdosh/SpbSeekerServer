package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.user.CreateUserDto
import com.bst.spbseekerserver.model.dto.user.UpdateUserDto
import com.bst.spbseekerserver.model.dto.user.UserDto
import com.bst.spbseekerserver.model.entity.User
import com.bst.spbseekerserver.repository.UserRepository
import com.bst.spbseekerserver.service.api.UserService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class UserServiceImpl(val userRepository: UserRepository) : UserService {
    override fun updateUser(updateUserDto: UpdateUserDto, email: String): UserDto {
        logger.debug { "Attempting to update $updateUserDto" }
        val user = getUserByEmail(email)
        val savedUser = userRepository.save(User.fromDto(updateUserDto, user))
        logger.debug { "User $savedUser saved successfully" }
        return savedUser.toDto()
    }

    override fun createUser(createUserDto: CreateUserDto): UserDto {
        logger.debug { "Attempting to create $createUserDto" }

        val savedUser = userRepository.save(User.fromDto(createUserDto))
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

    override fun deleteUser(id: Long): Long {
        logger.debug { "Attempting to delete user with id: $id" }
        val user = userRepository.findById(id).orElseThrow {
            logger.error { "User with provided id: $id, doesn't exists" }
            throw NotFoundException("User with provided id doesn't exists")
        }
        userRepository.delete(user)
        return id
    }

}
