package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.config.OpenAPIConfiguration.Companion.SECURITY_SCHEME
import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import com.bst.spbseekerserver.service.api.CategoryService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@Tag(name = "Category API", description = "Rest API for categories")
@RequestMapping(value = ["/api/v1/category"], produces = [MediaType.APPLICATION_JSON_VALUE])
class CategoryController(private val categoryService: CategoryService) {

    @GetMapping("/{id}")
    @Operation(description = "Fetching one category by id",
            security = [SecurityRequirement(name = SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = CategoryDto::class)
                        )
                    ])
            ])
    fun get(@PathVariable("id") categoryId: Long): CategoryDto = categoryService.getDto(categoryId)

    @GetMapping
    @Operation(description = "Fetching all categories",
            security = [SecurityRequirement(name = SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(array =
                        ArraySchema(schema = Schema(implementation = CategoryDto::class)))
                    ])
            ])
    fun getAll(): List<CategoryDto> = categoryService.getAll()

    @PostMapping
    @Operation(description = "Create category",
            security = [SecurityRequirement(name = SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = CategoryDto::class)
                        )
                    ])
            ])
    fun create(@RequestBody createCategoryDto: CreateCategoryDto): CategoryDto = categoryService.create(createCategoryDto)

    @PutMapping("/{id}")
    @Operation(description = "Update category",
            security = [SecurityRequirement(name = SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = CategoryDto::class)
                        )
                    ])
            ])
    fun update(@PathVariable("id") categoryId: Long, @RequestBody updateCategoryDto: UpdateCategoryDto): CategoryDto = categoryService.update(updateCategoryDto, categoryId)

    @DeleteMapping("/{id}")
    @Operation(description = "Delete one category by id",
            security = [SecurityRequirement(name = SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = CategoryDto::class)
                        )
                    ])
            ])
    fun delete(@PathVariable("id") categoryId: Long): Long = categoryService.delete(categoryId)
}
