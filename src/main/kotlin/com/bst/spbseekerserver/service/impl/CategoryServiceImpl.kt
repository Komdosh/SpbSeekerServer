package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import com.bst.spbseekerserver.model.entity.Category
import com.bst.spbseekerserver.repository.CategoryRepository
import com.bst.spbseekerserver.service.api.CategoryService
import com.bst.spbseekerserver.service.api.UserService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class CategoryServiceImpl(val categoryRepository: CategoryRepository,
                          val userService: UserService) : CategoryService {
    override fun getCategory(id: Long): Category {
        logger.debug { "Attempting to fetch category with id $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Category with provided id: $id, doesn't exists" }
            throw NotFoundException("Category with provided id doesn't exists")
        }
        logger.debug { "Fetched category: $category" }
        return category
    }

    override fun getCategoryDto(id: Long): CategoryDto {
        return getCategory(id).toDto()
    }

    override fun getAllCategories(): List<CategoryDto> {
        logger.debug { "Attempting to fetch all categories" }
        val categories = categoryRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched categories: $categories" }
        return categories
    }

    override fun createCategory(createCategoryDto: CreateCategoryDto): CategoryDto {
        logger.debug { "Attempting to create $createCategoryDto" }

        val savedCategory = categoryRepository.save(Category.fromDto(createCategoryDto))
        logger.debug { "Category $savedCategory saved successfully" }
        return savedCategory.toDto()
    }

    override fun updateCategory(updateCategoryDto: UpdateCategoryDto, categoryId: Long): CategoryDto {
        logger.debug { "Attempting to update $updateCategoryDto" }

        userService.checkBelong(categoryId)

        val savedCategory = categoryRepository.save(Category.fromDto(updateCategoryDto, getCategory(categoryId)))
        logger.debug { "Category $savedCategory saved successfully" }
        return savedCategory.toDto()
    }

    override fun deleteCategory(id: Long): Long {
        logger.debug { "Attempting to delete category with id: $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Category with provided id: $id, doesn't exists" }
            throw NotFoundException("Category with provided id doesn't exists")
        }

        userService.checkBelong(category.createdBy.id!!)

        categoryRepository.delete(category)
        return id
    }
}
