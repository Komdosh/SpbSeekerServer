package com.bst.spbseekerserver.config

import com.bst.spbseekerserver.model.entity.User
import com.bst.spbseekerserver.service.api.UserService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.domain.AuditorAware
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import java.util.*

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
class JpaAuditingConfiguration {
    @Bean
    fun auditorProvider(userService: UserService): AuditorAware<User> =
            AuditorAware { Optional.ofNullable(userService.getCurrentUser()) }
}
