package com.bst.spbseekerserver.auth.config

import org.springframework.security.core.annotation.AuthenticationPrincipal

@MustBeDocumented
@AuthenticationPrincipal
@kotlin.annotation.Retention
@Target(AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS)
annotation class CurrentUser
