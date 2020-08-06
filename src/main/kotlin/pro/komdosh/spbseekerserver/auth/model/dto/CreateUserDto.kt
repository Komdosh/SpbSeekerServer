package pro.komdosh.spbseekerserver.auth.model.dto

import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class CreateUserDto(
        @field:NotBlank(message = "Email is mandatory")
        @field:Email(message = "Invalid mailbox")
        @Schema(name = "New user email")
        val email: String?,
        @field:NotBlank(message = "Password is mandatory")
        @Schema(name = "New user password")
        val password: String?,
        @Schema(name = "Name of user")
        val name: String?,
        @Schema(name = "User's profile photo")
        val photoUrl: String?
)
