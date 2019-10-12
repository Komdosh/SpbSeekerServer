package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.HintDto
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
    fun get(@PathVariable("id") hintId: Long): HintDto = hintService.getHint(hintId)

    @ApiOperation(value = "Fetching all hints", responseContainer = "List", response = HintDto::class)
    @GetMapping
    fun getAll(): List<HintDto> = hintService.getAllHints()

    @ApiOperation(value = "Save hint", response = HintDto::class)
    @PostMapping
    fun save(@RequestBody hint: HintDto): HintDto = hintService.saveHint(hint)

    @ApiOperation(value = "Delete one hint by id", response = Long::class)
    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") hintId: Long): Long = hintService.deleteHint(hintId)
}