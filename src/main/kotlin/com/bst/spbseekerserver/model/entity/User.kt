package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.user.*
import com.bst.spbseekerserver.model.enums.UserRole
import org.springframework.security.crypto.password.PasswordEncoder
import javax.persistence.*

@Entity(name = "users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        val email: String,
        val password: String,
        val firstName: String,
        val lastName: String,
        val photoUrl: String,
        @Enumerated(EnumType.STRING)
        @ElementCollection(fetch = FetchType.EAGER)
        val roles: Set<UserRole>
) {
    constructor() : this(null, "", "", "", "", "", setOf())

    fun toDto(): UserDto = UserDto(
            id = this.id ?: 0,
            email = this.email,
            firstName = this.firstName,
            lastName = this.lastName,
            photoUrl = this.photoUrl,
            roles = this.roles)

    fun toCreatedByDto(): CreatedByUserDto = CreatedByUserDto(
            id = this.id ?: 0,
            email = this.email)

    fun toModifiedByDto(): ModifiedByUserDto = ModifiedByUserDto(
            id = this.id ?: 0,
            email = this.email)

    companion object {
        fun fromDto(dto: CreateUserDto, passwordEncoder: PasswordEncoder) = User(
                id = null,
                email = dto.email ?: "",
                password = passwordEncoder.encode(dto.password ?: ""),
                firstName = dto.firstName ?: "",
                lastName = dto.lastName ?: "",
                photoUrl = dto.photoUrl ?: "",
                roles = setOf(UserRole.USER))

        fun fromDto(dto: UpdateUserDto, passwordEncoder: PasswordEncoder, entity: User) = User(
                id = entity.id,
                email = dto.email ?: entity.email,
                password = passwordEncoder.encode(dto.password ?: entity.password),
                firstName = dto.firstName ?: entity.firstName,
                lastName = dto.lastName ?: entity.lastName,
                photoUrl = dto.photoUrl ?: entity.photoUrl,
                roles = entity.roles)
    }
}
