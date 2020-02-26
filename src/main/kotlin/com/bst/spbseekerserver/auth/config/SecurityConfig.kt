package com.bst.spbseekerserver.auth.config

import com.bst.spbseekerserver.auth.config.filter.JwtAuthenticationFilter
import com.bst.spbseekerserver.auth.config.oauth2.CookieOAuth2AuthorizationReqRepo
import com.bst.spbseekerserver.auth.config.oauth2.CustomOAuth2UserService
import com.bst.spbseekerserver.auth.config.oauth2.OAuth2FailureAuth
import com.bst.spbseekerserver.auth.config.oauth2.OAuth2SuccessfulAuth
import com.bst.spbseekerserver.auth.service.security.JWTTokenProvider
import com.bst.spbseekerserver.auth.service.security.RestAuthenticationEntryPoint
import com.bst.spbseekerserver.auth.service.security.UserAuthDetailsService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.BeanIds
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        prePostEnabled = true,
        securedEnabled = true,
        jsr250Enabled = true
)
class SecurityConfig(
        private val userAuthDetailsService: UserAuthDetailsService,
        private val restAuthenticationEntryPoint: RestAuthenticationEntryPoint,
        private val jwtTokenProvider: JWTTokenProvider,
        private val customOAuth2UserService: CustomOAuth2UserService,
        private val oAuth2SuccessfulAuth: OAuth2SuccessfulAuth,
        private val oAuth2FailureAuth: OAuth2FailureAuth
) : WebSecurityConfigurerAdapter() {

    public override fun configure(authenticationManagerBuilder: AuthenticationManagerBuilder) {
        authenticationManagerBuilder.userDetailsService(userAuthDetailsService)
                .passwordEncoder(passwordEncoder())
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    @Bean
    fun cookieAuthorizationRequestRepository(): CookieOAuth2AuthorizationReqRepo {
        return CookieOAuth2AuthorizationReqRepo()
    }

    @Bean
    fun jwtAuthenticationFilter(): JwtAuthenticationFilter {
        return JwtAuthenticationFilter(jwtTokenProvider, userAuthDetailsService)
    }

    override fun configure(http: HttpSecurity) {
        http
                .cors()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .csrf()
                .disable()
                .formLogin()
                .disable()
                .httpBasic()
                .disable()
                .exceptionHandling()
                .authenticationEntryPoint(restAuthenticationEntryPoint)
                .and()
                .authorizeRequests()
                .antMatchers(
                        "/swagger-ui.html", "/webjars/**", "/swagger-resources/",
                        "/swagger-resources/**", "/v2/api-docs", "/csrf"
                ).permitAll()
                .antMatchers("/",
                        "/error",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js").permitAll()
                .antMatchers("/api/v1/auth/**", "/oauth2 /**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/v1/user").permitAll()
                .antMatchers("/swagger-ui/*", "/api-docs/*", "/api-docs").permitAll()
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                .authorizationEndpoint()
                .baseUri("/oauth2/authorize")
                .authorizationRequestRepository(cookieAuthorizationRequestRepository())
                .and()
                .redirectionEndpoint()
                .baseUri("/oauth2/callback/*")
                .and()
                .userInfoEndpoint()
                .userService(customOAuth2UserService)
                .and()
                .successHandler(oAuth2SuccessfulAuth)
                .failureHandler(oAuth2FailureAuth)

        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter::class.java)
    }
}
