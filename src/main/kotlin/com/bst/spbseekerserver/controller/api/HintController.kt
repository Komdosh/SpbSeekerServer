package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.service.api.HintService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "hint", description = "Rest API for hint operations", tags = ["Hint API"])
@RequestMapping(value = ["/api/v1/hint"], produces = [MediaType.APPLICATION_JSON_VALUE])
class HintController(val hintService: HintService) {
    @ApiOperation(value = "Fetching one hint by id", response = HintDto::class)
    @GetMapping("/{id}")
    fun get(@PathVariable("id") hintId: Long): HintDto = hintService.getDto(hintId)

    @ApiOperation(value = "Fetching all hints", responseContainer = "List", response = HintDto::class)
    @GetMapping
    fun getAll(): List<HintDto> = hintService.getAll()

    @PostMapping
    @ApiOperation(value = "Create hint", response = HintDto::class)
    fun create(@RequestBody createHintDto: CreateHintDto): HintDto = hintService.create(createHintDto)

    @PutMapping("/{id}")
    @ApiOperation(value = "Update hint", response = HintDto::class)
    fun update(@PathVariable("id") hintId: Long, @RequestBody updateHintDto: UpdateHintDto): HintDto = hintService.update(updateHintDto, hintId)

    @ApiOperation(value = "Delete one hint by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") hintId: Long): Long = hintService.delete(hintId)
}
