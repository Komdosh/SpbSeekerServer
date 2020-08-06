package pro.komdosh.spbseekerserver.config.exception

import org.springframework.http.HttpStatus

class ErrorDetails(val status: HttpStatus, val message: String, val errors: List<String>) {
    constructor(status: HttpStatus, message: String, error: String) : this(status, message, listOf(error))
}
