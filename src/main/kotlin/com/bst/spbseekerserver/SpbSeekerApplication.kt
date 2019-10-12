package com.bst.spbseekerserver

import mu.KotlinLogging
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

val logger = KotlinLogging.logger {}

@SpringBootApplication
class SpbSeekerApplication

fun main(args: Array<String>) {
    runApplication<SpbSeekerApplication>(*args)
}
