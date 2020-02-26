package com.bst.spbseekerserver.auth.model.security.util

import org.springframework.util.SerializationUtils
import java.util.*
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

object CookieUtils {
    fun getCookie(request: HttpServletRequest, name: String): Optional<Cookie> {
        val cookies = request.cookies
        if (cookies != null && cookies.isEmpty()) {
            return Optional.empty()
        }
        val cookie = cookies.find { it.name == name }

        return if (cookie == null) Optional.empty() else Optional.of(cookie)
    }

    fun addCookie(response: HttpServletResponse, name: String?, value: String?, maxAge: Int) {
        val cookie = Cookie(name, value)
        cookie.apply {
            path = "/"
            isHttpOnly = true
            this.maxAge = maxAge
        }
        response.addCookie(cookie)
    }

    fun deleteCookie(request: HttpServletRequest, response: HttpServletResponse, name: String) {
        val cookies = request.cookies
        if (cookies != null && cookies.isEmpty()) {
            return
        }
        val cookie = cookies.find { it.name == name }

        cookie?.let {
            it.apply {
                value = ""
                path = "/"
                maxAge = 0
            }
            response.addCookie(it)
        }
    }

    fun serialize(t: Any?): String {
        return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(t))
    }

    fun <T> deserialize(cookie: Cookie, cls: Class<T>): T {
        return cls.cast(SerializationUtils.deserialize(
                Base64.getUrlDecoder().decode(cookie.value)))
    }
}
