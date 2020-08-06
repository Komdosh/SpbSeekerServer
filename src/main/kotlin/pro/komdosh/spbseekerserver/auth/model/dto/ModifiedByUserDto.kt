package pro.komdosh.spbseekerserver.auth.model.dto

import io.swagger.v3.oas.annotations.media.Schema

data class ModifiedByUserDto(
        @Schema(name = "Id of user that modified this resource")
        val id: Long,
        @Schema(name = "Email of user that modified this resource")
        val email: String
)
