package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.category.CategoryDto
import com.bst.spbseekerserver.model.dto.category.CreateCategoryDto
import com.bst.spbseekerserver.model.dto.category.UpdateCategoryDto
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Category(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        var imgUrl: String
) : Meta() {

    fun toDto(): CategoryDto = CategoryDto(
            id = id!!,
            name = name,
            imgUrl = imgUrl,
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateCategoryDto) = Category(
                id = null,
                name = dto.name,
                imgUrl = dto.imgUrl)

        fun fromDto(dto: UpdateCategoryDto, entity: Category): Category {
            entity.imgUrl = dto.imgUrl ?: entity.imgUrl
            entity.name = dto.name ?: entity.name
            return entity
        }

        fun fromDto(dto: CategoryDto) = Category(
                id = dto.id,
                name = dto.name,
                imgUrl = dto.imgUrl)
    }
}
