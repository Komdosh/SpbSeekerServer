package com.bst.spbseekerserver.config

import com.bst.spbseekerserver.model.entity.User
import com.bst.spbseekerserver.model.security.UserPrincipal
import com.bst.spbseekerserver.service.api.UserService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.domain.AuditorAware
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import java.util.*


@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
class JpaAuditingConfiguration {

    @Bean
    fun auditorProvider(userService: UserService): AuditorAware<User> {

        val authentication: Authentication? = SecurityContextHolder.getContext().authentication

        var user: User? = null
        if (authentication != null && authentication.isAuthenticated) {
            user = (authentication.principal as UserPrincipal).user
        }

        return AuditorAware {
            Optional.ofNullable(user)
        }
    }
}
