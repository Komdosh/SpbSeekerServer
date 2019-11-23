package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import javax.persistence.*

@Entity
data class Route(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        @ElementCollection
        var imgUrlList: List<String>,
        var description: String,
        @ManyToOne var category: Category
) : Meta() {

    fun toDto(): RouteDto = RouteDto(
            id = id!!,
            name = name,
            imgUrlList = imgUrlList,
            description = description,
            category = category.toDto(),
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateRouteDto) = Route(
                id = null,
                name = dto.name,
                imgUrlList = dto.imgUrlList,
                description = dto.description,
                category = Category.fromDto(dto.category)
        )

        fun fromDto(dto: UpdateRouteDto, entity: Route): Route {
            entity.name = dto.name ?: entity.name
            entity.imgUrlList = if (dto.imgUrlList.isEmpty()) entity.imgUrlList else dto.imgUrlList
            entity.description = dto.description ?: entity.description
            entity.category = Category.fromDto(dto.category ?: entity.category.toDto())

            return entity
        }
    }
}
