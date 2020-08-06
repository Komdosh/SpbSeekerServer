package pro.komdosh.spbseekerserver.auth.model.security

import pro.komdosh.spbseekerserver.auth.model.entity.User
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.core.user.OAuth2User


class UserPrincipal(
        private val email: String,
        private val password: String,
        private val authorities: Collection<GrantedAuthority>,
        private var attributes: MutableMap<String, Any>,
        val user: User
) : UserDetails, OAuth2User {

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return authorities
    }

    override fun getName(): String = user.name

    override fun getAttributes(): MutableMap<String, Any> = attributes

    override fun getPassword(): String {
        return password
    }

    override fun getUsername(): String {
        return email
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

    companion object {
        fun create(user: User): UserPrincipal {
            val authorities = user.roles.map { SimpleGrantedAuthority(it.name) }
            return UserPrincipal(user.email, user.password, authorities, mutableMapOf(), user)
        }

        fun create(user: User, attributes: MutableMap<String, Any>): UserPrincipal {
            val userPrincipal: UserPrincipal = create(user)
            userPrincipal.attributes = attributes
            return userPrincipal
        }
    }

}
