package pro.komdosh.spbseekerserver.auth.model.security.oauth2.user

import pro.komdosh.spbseekerserver.auth.model.types.AuthProvider

object OAuth2UserInfoFactory {
    @JvmStatic
    fun getOAuth2UserInfo(registrationId: String, attributes: Map<String, Any>): OAuth2UserInfo {
        return when {
            registrationId.equals(AuthProvider.GOOGLE.toString(), ignoreCase = true) -> {
                GoogleOAuth2UserInfo(attributes)
            }
            registrationId.equals(AuthProvider.FACEBOOK.toString(), ignoreCase = true) -> {
                FacebookOAuth2UserInfo(attributes)
            }
            else -> {
                throw IllegalArgumentException("Sorry! Login with $registrationId is not supported yet.")
            }
        }
    }
}
