package pro.komdosh.spbseekerserver.auth.model.dto

import pro.komdosh.spbseekerserver.auth.model.security.oauth2.user.OAuth2UserInfo
import io.swagger.v3.oas.annotations.media.Schema
import javax.validation.constraints.Email

data class UpdateUserDto(
        @field:Email(message = "Invalid mailbox")
        @Schema(name = "Updated email, if null it will not update this field")
        val email: String?,
        @Schema(name = "Updated password, if null it will not update this field")
        val password: String?,
        @Schema(name = "Name of user")
        val name: String?,
        @Schema(name = "User's profile photo")
        val photoUrl: String?
) {
        constructor(oauth2User: OAuth2UserInfo) : this(null, null, oauth2User.name, oauth2User.imageUrl)
}
