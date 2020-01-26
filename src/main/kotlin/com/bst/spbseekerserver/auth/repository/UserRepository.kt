package com.bst.spbseekerserver.auth.repository

import com.bst.spbseekerserver.auth.model.entity.User
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : CrudRepository<User, Long> {
    fun existsUserByEmail(email: String): Boolean
    fun findByEmail(email: String): Optional<User>
}
