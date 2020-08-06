package pro.komdosh.spbseekerserver.auth.service.security

import pro.komdosh.spbseekerserver.auth.exception.ResourceNotFoundException
import pro.komdosh.spbseekerserver.auth.model.entity.User
import pro.komdosh.spbseekerserver.auth.model.security.UserPrincipal
import pro.komdosh.spbseekerserver.auth.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional


@Component
class UserAuthDetailsService(private val userRepository: UserRepository) : UserDetailsService {

    @Transactional
    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(email: String): UserDetails {
        val user = userRepository
                .findByEmail(email)
                .orElseThrow { UsernameNotFoundException("User with email : $email not found") }
        return UserPrincipal.create(user)
    }

    @Transactional
    fun loadUserById(id: Long): UserDetails? {
        val user: User = userRepository.findById(id).orElseThrow { ResourceNotFoundException("User", "id", id) }
        return UserPrincipal.create(user)
    }

}
