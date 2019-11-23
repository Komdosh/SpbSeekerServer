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
    override fun get(id: Long): Category {
        logger.debug { "Attempting to fetch category with id $id" }
        val category = categoryRepository.findById(id).orElseThrow {
            logger.error { "Category with provided id: $id, doesn't exists" }
            throw NotFoundException("Category with provided id doesn't exists")
        }
        logger.debug { "Fetched category: $category" }
        return category
    }

    override fun getDto(id: Long): CategoryDto {
        return get(id).toDto()
    }

    override fun getAll(): List<CategoryDto> {
        logger.debug { "Attempting to fetch all categories" }
        val categories = categoryRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched categories: $categories" }
        return categories
    }

    override fun create(createDto: CreateCategoryDto): CategoryDto {
        logger.debug { "Attempting to create $createDto" }

        val saved = categoryRepository.save(Category.fromDto(createDto))
        logger.debug { "Category $saved saved successfully" }
        return saved.toDto()
    }

    override fun update(updateDto: UpdateCategoryDto, updatedId: Long): CategoryDto {
        logger.debug { "Attempting to update $updateDto" }

        val entity = get(updatedId)
        userService.checkBelong(entity.createdBy.id)

        val saved = categoryRepository.save(Category.fromDto(updateDto, get(updatedId)))
        logger.debug { "Category $saved saved successfully" }
        return saved.toDto()
    }

    override fun delete(id: Long): Long {
        logger.debug { "Attempting to delete category with id: $id" }

        val entity = get(id)
        userService.checkBelong(entity.createdBy.id)

        categoryRepository.delete(entity)
        return id
    }
}
