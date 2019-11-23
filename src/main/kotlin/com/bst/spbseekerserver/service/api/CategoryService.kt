package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import com.bst.spbseekerserver.model.entity.Category

interface CategoryService : ResourceService<CategoryDto, CreateCategoryDto, UpdateCategoryDto, Category>
