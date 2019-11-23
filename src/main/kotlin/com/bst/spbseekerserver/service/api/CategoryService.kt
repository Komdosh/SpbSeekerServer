package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import com.bst.spbseekerserver.model.entity.Category

interface CategoryService {
    fun getCategoryDto(id: Long): CategoryDto
    fun getCategory(id: Long): Category
    fun getAllCategories(): List<CategoryDto>
    fun createCategory(createCategoryDto: CreateCategoryDto): CategoryDto
    fun updateCategory(updateCategoryDto: UpdateCategoryDto, categoryId: Long): CategoryDto
    fun deleteCategory(id: Long): Long
}
