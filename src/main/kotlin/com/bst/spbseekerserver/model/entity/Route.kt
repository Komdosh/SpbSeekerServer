package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.route.CreateRouteDto
import com.bst.spbseekerserver.model.dto.route.RouteDto
import com.bst.spbseekerserver.model.dto.route.UpdateRouteDto
import com.bst.spbseekerserver.model.enums.PublishState
import com.bst.spbseekerserver.model.enums.SubmissionState
import javax.persistence.*

@Entity
data class Route(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        var description: String,
        @ManyToOne(fetch = FetchType.EAGER) var category: Category,
        @OneToMany(cascade = [CascadeType.ALL])
        var subRoutes: List<SubRoute>,
        @Enumerated(EnumType.STRING)
        var publishState: PublishState,
        @Enumerated(EnumType.STRING)
        var submissionState: SubmissionState
) : Meta() {

    fun toDto(): RouteDto = RouteDto(
            id = id!!,
            name = name,
            description = description,
            category = category.toDto(),
            subRoutes = subRoutes.map { it.toDto() },
            publishState = publishState,
            submissionState = submissionState,
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateRouteDto) = Route(
                id = null,
                name = dto.name,
                description = dto.description,
                category = Category.fromDto(dto.category),
                subRoutes = dto.subRoutes.map { SubRoute.fromDto(it) },
                publishState = PublishState.DRAFT,
                submissionState = SubmissionState.EDITING
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
