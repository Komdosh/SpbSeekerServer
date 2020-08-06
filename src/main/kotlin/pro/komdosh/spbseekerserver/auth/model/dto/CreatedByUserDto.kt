package pro.komdosh.spbseekerserver.auth.model.dto

import io.swagger.v3.oas.annotations.media.Schema

data class CreatedByUserDto(
        @Schema(name = "Id of user that created this resource")
        val id: Long,
        @Schema(name = "Email of user that created this resource")
        val email: String
)
