package com.bst.spbseekerserver.config

import io.swagger.v3.oas.models.Components
import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Contact
import io.swagger.v3.oas.models.info.Info
import io.swagger.v3.oas.models.security.SecurityScheme
import io.swagger.v3.oas.models.servers.Server
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class OpenAPIConfiguration {

    companion object {
        const val SECURITY_SCHEME = "bearer-key"
    }

    @Bean
    fun customOpenAPI(@Value("\${server.url:http://localhost}") serverUrl: String, @Value("\${server.port:8080}") serverPort: String): OpenAPI {
        return OpenAPI()
                .components(
                        Components()
                                .addSecuritySchemes(SECURITY_SCHEME,
                                        SecurityScheme()
                                                .description("Bearer token authorization")
                                                .type(SecurityScheme.Type.HTTP)
                                                .scheme("bearer")
                                                .bearerFormat("JWT")
                                                .`in`(SecurityScheme.In.HEADER)
                                                .name("Authorization")
                                )
                )
                .servers(getServersInfo("$serverUrl:$serverPort"))
                .info(getApiInfo())
    }

    private fun getServersInfo(serverUrl: String) =
            listOf(Server().url(serverUrl).description("General API Server"))

    private fun getApiInfo(): Info {
        val contact = Contact().name("Andrey Tabakov").email("komdosh@yandex.ru").url("http://komdosh.pro")
        return Info()
                .title("SpbSeeker Server")
                .description("Server for managing ")
                .version("0.0.1")
                .contact(contact)
    }
}
