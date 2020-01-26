package com.bst.spbseekerserver.auth.config.oauth2


import com.bst.spbseekerserver.auth.model.dto.UpdateUserDto
import com.bst.spbseekerserver.auth.model.entity.User
import com.bst.spbseekerserver.auth.model.security.UserPrincipal
import com.bst.spbseekerserver.auth.model.security.oauth2.user.OAuth2UserInfo
import com.bst.spbseekerserver.auth.model.security.oauth2.user.OAuth2UserInfoFactory
import com.bst.spbseekerserver.auth.model.types.AuthProvider
import com.bst.spbseekerserver.auth.model.types.UserRole
import com.bst.spbseekerserver.auth.repository.UserRepository
import org.springframework.security.authentication.InternalAuthenticationServiceException
import org.springframework.security.core.AuthenticationException
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest
import org.springframework.security.oauth2.core.OAuth2AuthenticationException
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.stereotype.Service
import org.springframework.util.StringUtils
import java.util.*

@Service
class CustomOAuth2UserService(val userRepository: UserRepository) : DefaultOAuth2UserService() {

    @Throws(OAuth2AuthenticationException::class)
    override fun loadUser(oAuth2UserRequest: OAuth2UserRequest): OAuth2User {
        val oAuth2User: OAuth2User = super.loadUser(oAuth2UserRequest)
        return try {
            processOAuth2User(oAuth2UserRequest, oAuth2User)
        } catch (ex: AuthenticationException) {
            throw ex
        } catch (ex: Exception) { // Throwing an instance of AuthenticationException will trigger the OAuth2AuthenticationFailureHandler
            throw InternalAuthenticationServiceException(ex.message, ex.cause)
        }
    }

    private fun processOAuth2User(oAuth2UserRequest: OAuth2UserRequest, oAuth2User: OAuth2User): OAuth2User {
        val oAuth2UserInfo: OAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(oAuth2UserRequest.clientRegistration.registrationId, oAuth2User.attributes)
        if (StringUtils.isEmpty(oAuth2UserInfo.email)) {
            throw IllegalStateException("Email not found from OAuth2 provider")
        }
        val userOptional: Optional<User> = userRepository.findByEmail(oAuth2UserInfo.email)
        var user: User
        if (userOptional.isPresent) {
            user = userOptional.get()
            if (user.provider != AuthProvider.valueOf(oAuth2UserRequest.clientRegistration.registrationId)) {
                throw IllegalStateException("Looks like you're signed up" +
                        " with ${user.provider} account. Please use your ${user.provider} account to login.")
            }
            user = updateExistingUser(user, oAuth2UserInfo)
        } else {
            user = registerNewUser(oAuth2UserRequest, oAuth2UserInfo)
        }
        return UserPrincipal.create(user, oAuth2User.attributes)
    }

    private fun registerNewUser(oAuth2UserRequest: OAuth2UserRequest, oAuth2UserInfo: OAuth2UserInfo): User {
        val user = User(null, oAuth2UserInfo.email, "", oAuth2UserInfo.name, oAuth2UserInfo.imageUrl, setOf(UserRole.USER),
                AuthProvider.valueOf(oAuth2UserRequest.clientRegistration.registrationId), oAuth2UserInfo.id)

        return userRepository.save(user)
    }

    private fun updateExistingUser(existingUser: User, oAuth2UserInfo: OAuth2UserInfo): User {
        return userRepository.save(
                User.fromDto(UpdateUserDto(oAuth2UserInfo), existingUser)
        )
    }
}
