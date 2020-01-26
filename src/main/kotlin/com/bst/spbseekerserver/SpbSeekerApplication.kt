package com.bst.spbseekerserver

import com.bst.spbseekerserver.auth.model.entity.User
import com.bst.spbseekerserver.auth.model.security.AuthProvider
import com.bst.spbseekerserver.auth.model.types.UserRole
import com.bst.spbseekerserver.auth.repository.UserRepository
import com.bst.spbseekerserver.config.AppProperties
import mu.KotlinLogging
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.security.crypto.password.PasswordEncoder

val logger = KotlinLogging.logger {}

@SpringBootApplication
@EnableConfigurationProperties(AppProperties::class)
class SpbSeekerApplication {
    @Bean
    fun init(userRepository: UserRepository, passwordEncoder: PasswordEncoder) = ApplicationRunner {
        dataSetup(userRepository, passwordEncoder)
    }
}

fun main(args: Array<String>) {
    runApplication<SpbSeekerApplication>(*args)
}

fun dataSetup(userRepository: UserRepository, passwordEncoder: PasswordEncoder) {
    if (!userRepository.existsUserByEmail("admin")) {
        userRepository.save(User(null, "admin",
                passwordEncoder.encode("123"), "Admin", "", setOf(UserRole.ADMIN), AuthProvider.LOCAL))
    }
}
