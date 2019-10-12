package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.CategoryDto
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Category(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        var imgUrl: String,
        @CreatedBy private var adminId: Long,
        @CreationTimestamp val createdDate: Date?,
        @UpdateTimestamp val updatedDate: Date?
) {

    constructor(id: Long?, name: String, adminId: Long, imgUrl: String)
            : this(id, name, imgUrl, adminId, createdDate = null, updatedDate = null)

    fun toDto(): CategoryDto = CategoryDto(
            id,
            name,
            adminId,
            imgUrl,
            createdDate!!,
            updatedDate!!
    )

    fun update(categoryDto: CategoryDto) {
        name = categoryDto.name
        imgUrl = categoryDto.imgUrl
    }
}