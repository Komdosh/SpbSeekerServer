package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.config.OpenAPIConfiguration
import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.service.api.HintService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Hint API", description = "REST API for hint operations")
@RequestMapping(value = ["/api/v1/hint"], produces = [MediaType.APPLICATION_JSON_VALUE])
class HintController(private val hintService: HintService) {

    @GetMapping("/{id}")
    @Operation(description = "Fetching one hint by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = HintDto::class)
                        )
                    ])
            ])
    fun get(@PathVariable("id") hintId: Long): HintDto = hintService.getDto(hintId)

    @GetMapping
    @Operation(description = "Fetching all hints",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                array = ArraySchema(
                                        schema = Schema(implementation = HintDto::class)
                                )
                        )
                    ])
            ])
    fun getAll(): List<HintDto> = hintService.getAll()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(description = "Create hint",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "201",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = HintDto::class)
                        )
                    ])
            ])
    fun create(@RequestBody createHintDto: CreateHintDto): HintDto = hintService.create(createHintDto)

    @PutMapping("/{id}")
    @Operation(description = "Update hint",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = HintDto::class)
                        )
                    ])
            ])
    fun update(@PathVariable("id") hintId: Long, @RequestBody updateHintDto: UpdateHintDto): HintDto = hintService.update(updateHintDto, hintId)

    @DeleteMapping("/{id}")
    @Operation(description = "Delete one hint by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = Long::class)
                        )
                    ])
            ])
    fun delete(@PathVariable("id") hintId: Long): Long = hintService.delete(hintId)
}
