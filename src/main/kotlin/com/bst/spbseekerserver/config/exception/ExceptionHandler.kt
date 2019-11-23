package com.bst.spbseekerserver.config.exception

import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ExceptionHandler : ResponseEntityExceptionHandler() {
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(AccessDeniedException::class)
    fun handleAccessDeniedException(ex: AccessDeniedException, request: WebRequest): ResponseEntity<String> {
        return ResponseEntity("Access Is Denied ", HttpStatus.FORBIDDEN)
    }

    override fun handleMethodArgumentNotValid(ex: MethodArgumentNotValidException,
                                              headers: HttpHeaders, status: HttpStatus,
                                              request: WebRequest): ResponseEntity<Any> {
        val errors = ex.bindingResult.fieldErrors
                .filter { fieldError -> !fieldError.defaultMessage.isNullOrEmpty() }
                .map { fieldError -> fieldError.defaultMessage!! }
                .toList()

        val errorDetails = ErrorDetails(HttpStatus.BAD_REQUEST, ex.localizedMessage, errors)
        return handleExceptionInternal(ex, errorDetails, headers, errorDetails.status, request)
    }
}
