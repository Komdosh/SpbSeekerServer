package com.bst.spbseekerserver.model.dto.meta

import com.bst.spbseekerserver.auth.model.dto.CreatedByUserDto
import com.bst.spbseekerserver.auth.model.dto.ModifiedByUserDto
import io.swagger.annotations.ApiModelProperty
import java.util.*

data class MetaDto(
        @ApiModelProperty(notes = "User that create this resource")
        val createdBy: CreatedByUserDto,
        @ApiModelProperty(notes = "User that modify this resource")
        val modifiedBy: ModifiedByUserDto,
        @ApiModelProperty(notes = "Creation date")
        val created: Date,
        @ApiModelProperty(notes = "Modified date")
        val modified: Date
)
