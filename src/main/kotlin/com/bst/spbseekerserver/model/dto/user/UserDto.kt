package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.enums.UserRole

data class UserDto(
        val id: Long,
        val email: String,
        val roles: Set<UserRole>
)
