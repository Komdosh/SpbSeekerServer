package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.TravelDto
import io.swagger.annotations.ApiModelProperty
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Travel(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        @ApiModelProperty(notes = "Travel id", required = true)
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
        @CreationTimestamp private val createdDate: Date,
        @ApiModelProperty(notes = "Date when administrator update this travel")
        @UpdateTimestamp private val updatedDate: Date
) {
    fun toDto(): TravelDto = TravelDto(
            id,
            name,
            adminId,
            imgUrl,
            descriptionUrl,
            categoryName,
            createdDate,
            updatedDate
    )
}