package pro.komdosh.spbseekerserver.service.impl

import pro.komdosh.spbseekerserver.auth.service.api.UserService
import pro.komdosh.spbseekerserver.logger
import pro.komdosh.spbseekerserver.model.dto.category.CategoryDto
import pro.komdosh.spbseekerserver.model.dto.category.CreateCategoryDto
import pro.komdosh.spbseekerserver.model.dto.category.UpdateCategoryDto
import pro.komdosh.spbseekerserver.model.entity.Category
import pro.komdosh.spbseekerserver.repository.CategoryRepository
import pro.komdosh.spbseekerserver.service.api.CategoryService
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
