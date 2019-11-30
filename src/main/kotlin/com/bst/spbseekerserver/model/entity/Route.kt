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
        var description: String,
        @ManyToOne(fetch = FetchType.EAGER) var category: Category,
        @OneToMany(cascade = [CascadeType.ALL])
        var subRoutes: List<SubRoute>
) : Meta() {

    fun toDto(): RouteDto = RouteDto(
            id = id!!,
            name = name,
            description = description,
            category = category.toDto(),
            subRoutes = subRoutes.map { it.toDto() },
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateRouteDto) = Route(
                id = null,
                name = dto.name,
                description = dto.description,
                category = Category.fromDto(dto.category),
                subRoutes = dto.subRoutes.map { SubRoute.fromDto(it) }
        )

        fun fromDto(dto: UpdateRouteDto, entity: Route): Route {
            entity.name = dto.name ?: entity.name
            entity.description = dto.description ?: entity.description
            entity.category = Category.fromDto(dto.category ?: entity.category.toDto())
            entity.subRoutes = dto.subRoutes.filter { subRoute -> entity.subRoutes.find { it.id == subRoute.id } != null }
                    .map { subRoute -> SubRoute.fromDto(subRoute, entity = entity.subRoutes.find { it.id == subRoute.id }!!) }

            return entity
        }
    }
}
