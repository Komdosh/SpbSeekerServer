package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.CategoryDto
import com.bst.spbseekerserver.repository.CategoryRepository
import com.bst.spbseekerserver.service.api.CategoryService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class CategoryServiceImpl(val categoryRepository: CategoryRepository) : CategoryService {
    override fun getCategory(id: Long): CategoryDto {
        logger.debug { "Attempting to fetch category with id $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Travel with provided id: $id, doesn't exists" }
            throw NotFoundException("Travel with provided id doesn't exists")
        }
        logger.debug { "Fetched category: $category" }
        return category.toDto()
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
            logger.error { "Travel with provided id: $id, doesn't exists" }
            throw NotFoundException("Travel with provided id doesn't exists")
        }
        categoryRepository.delete(category)
        return id
    }

    override fun saveCategory(category: CategoryDto): CategoryDto {
        logger.debug { "Attempting to save category $category" }
        val saveCategory = categoryRepository.save(category.toEntity()).toDto()
        logger.debug { "Travel $saveCategory saved successfully" }
        return saveCategory
    }


}