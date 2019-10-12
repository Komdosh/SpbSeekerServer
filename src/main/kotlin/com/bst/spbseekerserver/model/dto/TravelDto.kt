package com.bst.spbseekerserver.model.dto

import com.bst.spbseekerserver.model.entity.Category
import com.bst.spbseekerserver.model.entity.Travel
import io.swagger.annotations.ApiModelProperty
import org.springframework.data.annotation.CreatedBy
import java.util.*

data class TravelDto(
        @ApiModelProperty(notes = "Travel id")
        val id: Long?,
        @ApiModelProperty(notes = "Provided travel name", required = true)
        var name: String,
        @ApiModelProperty(notes = "Id of user that can managing this travel", required = true)
        @CreatedBy var adminId: Long,
        @ApiModelProperty(notes = "Image url of travel", required = true)
        var imgUrl: String,
        @ApiModelProperty(notes = "Extended description of travel", required = true)
        var description: String,
        @ApiModelProperty(notes = "Category id", required = true)
        var categoryId: Long,
        @ApiModelProperty(notes = "Date when administrator created this travel")
        val createdDate: Date?,
        @ApiModelProperty(notes = "Date when administrator updated this travel")
        val updatedDate: Date?
) {
    fun toEntity(category: Category): Travel = Travel(
            id,
            name,
            adminId,
            imgUrl,
            description,
            category
    )
}