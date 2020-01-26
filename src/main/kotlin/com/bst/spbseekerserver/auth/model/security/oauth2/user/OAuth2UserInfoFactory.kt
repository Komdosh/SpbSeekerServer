package com.bst.spbseekerserver.auth.model.security.oauth2.user

import com.bst.spbseekerserver.auth.model.security.AuthProvider

object OAuth2UserInfoFactory {
    @JvmStatic
    fun getOAuth2UserInfo(registrationId: String, attributes: Map<String, Any>): OAuth2UserInfo {
        return if (registrationId.equals(AuthProvider.GOOGLE.toString(), ignoreCase = true)) {
            GoogleOAuth2UserInfo(attributes)
        } else if (registrationId.equals(AuthProvider.FACEBOOK.toString(), ignoreCase = true)) {
            FacebookOAuth2UserInfo(attributes)
        } else {
            throw IllegalArgumentException("Sorry! Login with $registrationId is not supported yet.")
        }
    }
}
