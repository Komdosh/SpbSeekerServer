package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.dto.category.CategoryDto
import pro.komdosh.spbseekerserver.model.dto.category.CreateCategoryDto
import pro.komdosh.spbseekerserver.model.dto.category.UpdateCategoryDto
import pro.komdosh.spbseekerserver.model.entity.Category

interface CategoryService : ResourceService<CategoryDto, CreateCategoryDto, UpdateCategoryDto, Category>
