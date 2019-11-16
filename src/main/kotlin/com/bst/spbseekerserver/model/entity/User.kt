package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.enums.UserRole
import javax.persistence.*

@Entity(name = "users")
data class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        private val id: Long?,
        val email: String,
        val password: String,
        @ElementCollection(fetch = FetchType.EAGER)
        @Enumerated(EnumType.STRING)
        val roles: Set<UserRole>
)
