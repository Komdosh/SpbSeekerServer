package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.TravelDto
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import java.util.*
import javax.persistence.*

@Entity
data class Travel(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        @CreatedBy var adminId: Long,
        var imgUrl: String,
        var description: String,
        @ManyToOne var category: Category,
        @CreationTimestamp val createdDate: Date?,
        @UpdateTimestamp val updatedDate: Date?
) {
    constructor(id: Long?, name: String, adminId: Long, imgUrl: String, description: String, category: Category)
            : this(id, name, adminId, imgUrl, description, category, createdDate = null, updatedDate = null)

    fun toDto(): TravelDto = TravelDto(
            id,
            name,
            adminId,
            imgUrl,
            description,
            category.id!!,
            createdDate!!,
            updatedDate!!
    )

    fun update(travelDto: TravelDto) {
        name = travelDto.name
        imgUrl = travelDto.imgUrl
        description = travelDto.description
    }
}