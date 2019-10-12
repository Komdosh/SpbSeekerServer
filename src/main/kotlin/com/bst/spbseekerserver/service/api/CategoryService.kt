package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.CategoryDto

interface CategoryService {
    fun getCategory(id: Long): CategoryDto
    fun getAllCategories(): List<CategoryDto>
    fun deleteCategory(id: Long): Long
    fun saveCategory(category: CategoryDto): CategoryDto
}