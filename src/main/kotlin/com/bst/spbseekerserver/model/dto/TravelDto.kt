package com.bst.spbseekerserver.model.dto

import com.bst.spbseekerserver.model.entity.Travel
import io.swagger.annotations.ApiModelProperty
import lombok.NoArgsConstructor
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import java.lang.IllegalArgumentException
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

data class TravelDto(
        @ApiModelProperty(notes = "Travel id name", required = true)
        private val id: Long?,
        @ApiModelProperty(notes = "Provided travel name", required = true)
        private var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this travel", required = true)
        @CreatedBy private var adminId: Long,
        @ApiModelProperty(notes = "Image url of travel", required = true)
        private var imgUrl: String,
        @ApiModelProperty(notes = "Extended description of travel", required = true)
        private var descriptionUrl: String,
        @ApiModelProperty(notes = "Category name", required = true)
        private var categoryName: String,
        @ApiModelProperty(notes = "Date when administrator create this travel")
        private val createdDate: Date,
        @ApiModelProperty(notes = "Date when administrator update this travel")
        private val updatedDate: Date
) {
    fun toEntity(): Travel = Travel(
            id,
            name,
            adminId,
            imgUrl,
            descriptionUrl,
            categoryName,
            createdDate,
            updatedDate
    )

    override fun toString(): String {
        return "TravelDto(id=$id, name='$name', adminId=$adminId, imgUrl='$imgUrl', descriptionUrl='$descriptionUrl', categoryName='$categoryName', createdDate=$createdDate, updatedDate=$updatedDate)"
    }
}