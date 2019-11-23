package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import com.bst.spbseekerserver.service.api.CategoryService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Api(value = "category", description = "Rest API for categories", tags = ["Category API"])
@RequestMapping(value = ["/api/v1/category"], produces = [MediaType.APPLICATION_JSON_VALUE])
class CategoryController(val categoryService: CategoryService) {
    @GetMapping("/{id}")
    @ApiOperation(value = "Fetching one category by id", response = CategoryDto::class)
    fun get(@PathVariable("id") categoryId: Long): CategoryDto = categoryService.getDto(categoryId)

    @GetMapping
    @ApiOperation(value = "Fetching all categories", responseContainer = "List", response = CategoryDto::class)
    fun getAll(): List<CategoryDto> = categoryService.getAll()

    @PostMapping
    @ApiOperation(value = "Create category", response = CategoryDto::class)
    fun create(@RequestBody createCategoryDto: CreateCategoryDto): CategoryDto = categoryService.create(createCategoryDto)

    @PutMapping("/{id}")
    @ApiOperation(value = "Update category", response = CategoryDto::class)
    fun update(@PathVariable("id") categoryId: Long, @RequestBody updateCategoryDto: UpdateCategoryDto): CategoryDto = categoryService.update(updateCategoryDto, categoryId)

    @DeleteMapping("/{id}")
    @ApiOperation(value = "Delete one category by id", response = Long::class)
    fun delete(@PathVariable("id") categoryId: Long): Long = categoryService.delete(categoryId)
}
