package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.service.api.HintService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Hint API", description = "Rest API for hint operations")
@RequestMapping(value = ["/api/v1/hint"], produces = [MediaType.APPLICATION_JSON_VALUE])
class HintController(val hintService: HintService) {
    @Operation(description = "Fetching one hint by id")
    @GetMapping("/{id}")
    fun get(@PathVariable("id") hintId: Long): HintDto = hintService.getDto(hintId)

    @Operation(description = "Fetching all hints")
    @GetMapping
    fun getAll(): List<HintDto> = hintService.getAll()

    @PostMapping
    @Operation(description = "Create hint")
    fun create(@RequestBody createHintDto: CreateHintDto): HintDto = hintService.create(createHintDto)

    @PutMapping("/{id}")
    @Operation(description = "Update hint")
    fun update(@PathVariable("id") hintId: Long, @RequestBody updateHintDto: UpdateHintDto): HintDto = hintService.update(updateHintDto, hintId)

    @Operation(description = "Delete one hint by id")
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") hintId: Long): Long = hintService.delete(hintId)
}
