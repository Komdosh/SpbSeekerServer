package com.bst.spbseekerserver.auth.model.security.oauth2.user

class FacebookOAuth2UserInfo(attributes: Map<String, Any>) : OAuth2UserInfo(attributes) {

    override val id: String
        get() = attributes["id"] as String? ?: ""

    override val name: String
        get() = attributes["name"] as String? ?: ""

    override val email: String
        get() = attributes["email"] as String? ?: ""

    override val imageUrl: String
        get(): String {
            if (attributes.containsKey("picture")) {
                val pictureObj = attributes["picture"] as Map<String, Any>
                if (pictureObj.containsKey("data")) {
                    val dataObj = pictureObj["data"] as Map<String, Any>
                    if (dataObj.containsKey("url")) {
                        return dataObj["url"] as String
                    }
                }
            }
            return ""
        }
}
