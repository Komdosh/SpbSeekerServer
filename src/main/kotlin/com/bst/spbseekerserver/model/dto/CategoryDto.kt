package com.bst.spbseekerserver.model.dto

import com.bst.spbseekerserver.model.entity.Category
import io.swagger.annotations.ApiModelProperty
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import org.springframework.lang.Nullable
import java.util.*
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

data class CategoryDto(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        @ApiModelProperty(notes = "Category id")
        val id: Long?,
        @ApiModelProperty(notes = "Provided category name", required = true)
        var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this travel", required = true)
        @CreatedBy var adminId: Long,
        @ApiModelProperty(notes = "Image url of category")
        var imgUrl: String = "",
        @ApiModelProperty(notes = "Date when administrator created this point")
        @Nullable @CreationTimestamp var createdDate: Date?,
        @ApiModelProperty(notes = "Date when administrator updated this point")
        @Nullable @UpdateTimestamp var updatedDate: Date?
) {

    fun toEntity(): Category = Category(
            id,
            name,
            adminId,
            imgUrl
    )
}