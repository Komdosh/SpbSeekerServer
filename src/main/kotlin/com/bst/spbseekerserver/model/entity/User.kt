package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.user.*
import com.bst.spbseekerserver.model.enums.UserRole
import javax.persistence.*

@Entity(name = "users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        val email: String,
        val password: String,
        @Enumerated(EnumType.STRING)
        @ElementCollection(fetch = FetchType.EAGER)
        val roles: Set<UserRole>
) {
    fun toDto(): UserDto = UserDto(
            id = this.id!!,
            email = this.email,
            roles = this.roles)

    fun toCreatedByDto(): CreatedByUserDto = CreatedByUserDto(
            id = this.id!!,
            email = this.email)

    fun toModifiedByDto(): ModifiedByUserDto = ModifiedByUserDto(
            id = this.id!!,
            email = this.email)

    companion object {
        fun fromDto(dto: CreateUserDto) = User(
                id = null,
                email = dto.email ?: "",
                password = dto.password ?: "",
                roles = setOf(UserRole.USER))

        fun fromDto(dto: UpdateUserDto, entity: User) = User(
                id = entity.id,
                email = dto.email ?: entity.email,
                password = dto.password ?: entity.password,
                roles = entity.roles)
    }
}
