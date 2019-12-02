package com.bst.spbseekerserver.model.dto.user

import com.bst.spbseekerserver.model.security.oauth2.user.OAuth2UserInfo
import io.swagger.annotations.ApiModelProperty
import javax.validation.constraints.Email

data class UpdateUserDto(
        @field:Email(message = "Invalid mailbox")
        @ApiModelProperty(notes = "Updated email, if null it will not update this field")
        val email: String?,
        @ApiModelProperty(notes = "Updated password, if null it will not update this field")
        val password: String?,
        @ApiModelProperty(notes = "Name of user")
        val name: String?,
        @ApiModelProperty(notes = "User's profile photo")
        val photoUrl: String?
) {
        constructor(oauth2User: OAuth2UserInfo) : this(null, null, oauth2User.name, oauth2User.imageUrl)
}
