package com.bst.spbseekerserver.service

import com.bst.spbseekerserver.model.security.UserPrincipal
import com.bst.spbseekerserver.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Component

@Component
class UserAuthDetailsService(private val userRepository: UserRepository) : UserDetailsService {

    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        val user = userRepository
                .findByEmail(username)
                .orElseThrow { UsernameNotFoundException("User name $username not found in DB") }
        return UserPrincipal.create(user)
    }

}
