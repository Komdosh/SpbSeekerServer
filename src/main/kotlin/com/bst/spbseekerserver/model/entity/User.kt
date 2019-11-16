package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.user.CreateUserDto
import com.bst.spbseekerserver.model.dto.user.UpdateUserDto
import com.bst.spbseekerserver.model.dto.user.UserDto
import com.bst.spbseekerserver.model.enums.UserRole
import javax.persistence.*

@Entity(name = "users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        val email: String,
        val password: String,
        @ElementCollection(fetch = FetchType.EAGER)
        @Enumerated(EnumType.STRING)
        val roles: Set<UserRole>
) {
        fun toDto(): UserDto = UserDto(
                id = this.id!!,
                email = this.email,
                roles = this.roles)

        companion object {
                fun fromDto(dto: CreateUserDto) = User(null, dto.email, dto.password, setOf(UserRole.USER))
                fun fromDto(dto: UpdateUserDto, entity: User) = User(entity.id, dto.email
                        ?: entity.email, dto.password ?: entity.password, entity.roles)
        }
}
