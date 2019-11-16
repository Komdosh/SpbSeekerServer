package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.entity.Category

interface CategoryService {
    fun getCategory(id: Long): CategoryDto
    fun getCategoryEntity(id: Long): Category
    fun getAllCategories(): List<CategoryDto>
    fun deleteCategory(id: Long): Long
    fun saveCategory(category: CategoryDto): CategoryDto
}
