package com.bst.spbseekerserver.model.dto

import com.bst.spbseekerserver.model.entity.Category
import io.swagger.annotations.ApiModelProperty
import org.springframework.data.annotation.CreatedBy
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

data class CategoryDto(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        @ApiModelProperty(notes = "Category id", required = true)
        private val id: Long?,
        @ApiModelProperty(notes = "Provided category name", required = true)
        private var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this travel", required = true)
        @CreatedBy private var adminId: Long,
        @ApiModelProperty(notes = "Image url of category")
        private var imgUrl: String
) {
    fun toEntity(): Category = Category(
            id,
            name,
            adminId,
            imgUrl
    )
}