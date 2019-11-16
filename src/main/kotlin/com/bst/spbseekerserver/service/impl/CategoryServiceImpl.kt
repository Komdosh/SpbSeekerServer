package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.entity.Category
import com.bst.spbseekerserver.repository.CategoryRepository
import com.bst.spbseekerserver.service.api.CategoryService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class CategoryServiceImpl(val categoryRepository: CategoryRepository) : CategoryService {
    override fun getCategoryEntity(id: Long): Category {
        logger.debug { "Attempting to fetch category with id $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Category with provided id: $id, doesn't exists" }
            throw NotFoundException("Category with provided id doesn't exists")
        }
        logger.debug { "Fetched category: $category" }
        return category
    }

    override fun getCategory(id: Long): CategoryDto {
        return getCategoryEntity(id).toDto()
    }

    override fun getAllCategories(): List<CategoryDto> {
        logger.debug { "Attempting to fetch all categories" }
        val categories = categoryRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched categories: $categories" }
        return categories
    }

    override fun deleteCategory(id: Long): Long {
        logger.debug { "Attempting to delete category with id: $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Category with provided id: $id, doesn't exists" }
            throw NotFoundException("Category with provided id doesn't exists")
        }
        categoryRepository.delete(category)
        return id
    }

    override fun saveCategory(category: CategoryDto): CategoryDto {
        logger.debug { "Attempting to save category $category" }

        var categoryEntity = category.toEntity()
        category.id?.let {
            categoryEntity = getCategoryEntity(it)
            categoryEntity.update(category)
        }

        val saveCategory = categoryRepository.save(categoryEntity).toDto()
        logger.debug { "Category $saveCategory saved successfully" }
        return saveCategory
    }
}
