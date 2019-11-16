package com.bst.spbseekerserver.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import org.springframework.data.domain.Pageable
import org.springframework.http.ResponseEntity
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.*
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spi.service.contexts.SecurityContext
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2
import java.util.*


const val AUTHORIZATION_HEADER = "Authorization"
const val DEFAULT_INCLUDE_PATTERN = "/api/.*"

@Configuration
@EnableSwagger2
@Import(springfox.bean.validators.configuration.BeanValidatorPluginsConfiguration::class)
class SwaggerConfiguration {

    @Bean
    fun api(): Docket {
        val docket = Docket(DocumentationType.SWAGGER_2)
                .apiInfo(getApiInfo())
                .pathMapping("/")
                .apiInfo(ApiInfo.DEFAULT)
                .forCodeGeneration(true)
                .genericModelSubstitutes(ResponseEntity::class.java)
                .ignoredParameterTypes(Pageable::class.java)
                .ignoredParameterTypes(java.sql.Date::class.java)
                .directModelSubstitute(java.time.LocalDate::class.java, java.sql.Date::class.java)
                .directModelSubstitute(java.time.ZonedDateTime::class.java, Date::class.java)
                .directModelSubstitute(java.time.LocalDateTime::class.java, Date::class.java)
                .securityContexts(listOf(securityContext()))
                .securitySchemes(listOf(apiKey()))
                .useDefaultResponseMessages(false)


        return docket.select()
                .apis(RequestHandlerSelectors.basePackage("com.bst.spbseekerserver.controller"))
                .paths(PathSelectors.regex(DEFAULT_INCLUDE_PATTERN))
                .build()
    }

    private fun getApiInfo(): ApiInfo {
        val contact = Contact("Andrey Tabakov", "http://komdosh.pro", "komdosh@yandex.ru")
        return ApiInfoBuilder()
                .title("SpbSeeker Server")
                .description("Server for managing ")
                .version("0.0.1")
                .contact(contact)
                .build()
    }

    private fun apiKey(): ApiKey {
        return ApiKey("JWT", AUTHORIZATION_HEADER, "HEADER")
    }

    private fun securityContext(): SecurityContext {
        return SecurityContext.builder()
                .securityReferences(defaultAuth())
                .forPaths(PathSelectors.regex(DEFAULT_INCLUDE_PATTERN))
                .build()
    }

    fun defaultAuth(): List<SecurityReference> {
        val authorizationScope = AuthorizationScope("global", "accessEverything")
        val authorizationScopes = arrayOfNulls<AuthorizationScope>(1)
        authorizationScopes[0] = authorizationScope
        return listOf(SecurityReference("JWT", authorizationScopes))
    }
}
