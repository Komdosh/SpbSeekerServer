package pro.komdosh.spbseekerserver.model.dto.meta

import pro.komdosh.spbseekerserver.auth.model.dto.CreatedByUserDto
import pro.komdosh.spbseekerserver.auth.model.dto.ModifiedByUserDto
import io.swagger.v3.oas.annotations.media.Schema
import java.util.*

data class MetaDto(
        @Schema(name = "User that create this resource")
        val createdBy: CreatedByUserDto,
        @Schema(name = "User that modify this resource")
        val modifiedBy: ModifiedByUserDto,
        @Schema(name = "Creation date")
        val created: Date,
        @Schema(name = "Modified date")
        val modified: Date
)
