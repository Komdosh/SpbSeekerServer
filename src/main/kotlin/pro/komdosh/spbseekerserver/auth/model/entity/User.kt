package pro.komdosh.spbseekerserver.auth.model.entity

import pro.komdosh.spbseekerserver.auth.model.dto.*
import pro.komdosh.spbseekerserver.auth.model.types.AuthProvider
import pro.komdosh.spbseekerserver.auth.model.types.UserRole
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import javax.persistence.*

@Entity
@Table(name = "users", uniqueConstraints = [
    UniqueConstraint(columnNames = ["email"])
])
data class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long? = null,
        val email: String = "",
        val password: String = "",
        val name: String = "",
        val photoUrl: String = "",
        @Enumerated(EnumType.STRING)
        @ElementCollection(fetch = FetchType.EAGER)
        val roles: Set<UserRole> = setOf(UserRole.ROLE_USER),
        @Enumerated(EnumType.STRING)
        val provider: AuthProvider = AuthProvider.LOCAL,
        val providerId: String = ""
) {
    fun toDto(): UserDto = UserDto(
            id = this.id ?: 0,
            email = this.email,
            name = this.name,
            photoUrl = this.photoUrl,
            roles = this.roles,
            provider = this.provider)

    fun toCreatedByDto(): CreatedByUserDto = CreatedByUserDto(
            id = this.id ?: 0,
            email = this.email)

    fun toModifiedByDto(): ModifiedByUserDto = ModifiedByUserDto(
            id = this.id ?: 0,
            email = this.email)

    companion object {
        fun fromDto(dto: CreateUserDto, passwordEncoder: PasswordEncoder = BCryptPasswordEncoder(), authProvider: AuthProvider = AuthProvider.LOCAL) = User(
                id = null,
                email = dto.email ?: "",
                password = passwordEncoder.encode(dto.password ?: ""),
                name = dto.name ?: "",
                photoUrl = dto.photoUrl ?: "",
                roles = setOf(UserRole.ROLE_USER),
                provider = authProvider)

        fun fromDto(dto: UpdateUserDto, entity: User, passwordEncoder: PasswordEncoder = BCryptPasswordEncoder()) = User(
                id = entity.id,
                email = dto.email ?: entity.email,
                password = passwordEncoder.encode(dto.password ?: entity.password),
                name = dto.name ?: entity.name,
                photoUrl = dto.photoUrl ?: entity.photoUrl,
                roles = entity.roles,
                provider = entity.provider)
    }
}
