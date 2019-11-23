package com.bst.spbseekerserver.config

import com.bst.spbseekerserver.config.filter.JwtAuthenticationFilter
import com.bst.spbseekerserver.service.security.InvalidLoginAttemptHandler
import com.bst.spbseekerserver.service.security.JWTTokenProvider
import com.bst.spbseekerserver.service.security.UserAuthDetailsService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter


@Configuration
@EnableWebSecurity
class SecurityConfig(
        private val userAuthDetailsService: UserAuthDetailsService,
        private val invalidLoginAttemptHandler: InvalidLoginAttemptHandler,
        private val jwtTokenProvider: JWTTokenProvider
) : WebSecurityConfigurerAdapter() {

    @Throws(Exception::class)
    public override fun configure(authenticationManagerBuilder: AuthenticationManagerBuilder) {
        authenticationManagerBuilder.userDetailsService(userAuthDetailsService)
                .passwordEncoder(passwordEncoder())
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    override fun configure(http: HttpSecurity) {
        http
                .cors().and().csrf().disable()
                .exceptionHandling().authenticationEntryPoint(invalidLoginAttemptHandler)
                .and()
                .authorizeRequests()
                .antMatchers("/api/v1/authenticate/**").permitAll()
                .antMatchers(
                        "/swagger-ui.html", "/webjars/**", "/swagger-resources/",
                        "/swagger-resources/**", "/v2/api-docs", "/csrf"
                ).permitAll()
                .antMatchers(HttpMethod.POST, "/api/v1/user").permitAll()
                .anyRequest().authenticated()

        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter::class.java)
    }

    @Bean
    fun jwtAuthenticationFilter(): JwtAuthenticationFilter {
        return JwtAuthenticationFilter(jwtTokenProvider, userAuthDetailsService)
    }
}
