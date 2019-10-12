package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.CategoryDto
import io.swagger.annotations.ApiModelProperty
import org.springframework.data.annotation.CreatedBy
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Category(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        @ApiModelProperty(notes = "Category id", required = true)
        private val id: Long?,
        @ApiModelProperty(notes = "Provided category name", required = true)
        private var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this category", required = true)
        @CreatedBy private var adminId: Long,
        @ApiModelProperty(notes = "Image url of category")
        private var imgUrl: String
) {
    fun toDto(): CategoryDto = CategoryDto(
            id,
            name,
            adminId,
            imgUrl
    )
}