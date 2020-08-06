package pro.komdosh.spbseekerserver.model.dto.category

import io.swagger.v3.oas.annotations.media.Schema

data class UpdateCategoryDto(
        @Schema(name = "Provided category name")
        val name: String?,
        @Schema(name = "Image url of category")
        val imgUrl: String?
)
