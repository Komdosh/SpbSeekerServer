package com.bst.spbseekerserver.auth.service.security

import com.bst.spbseekerserver.auth.model.security.UserPrincipal
import com.bst.spbseekerserver.auth.repository.UserRepository
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
