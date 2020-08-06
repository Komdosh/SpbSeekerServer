package pro.komdosh.spbseekerserver.model.entity

import pro.komdosh.spbseekerserver.model.dto.route.subroute.CreateSubRouteDto
import pro.komdosh.spbseekerserver.model.dto.route.subroute.SubRouteDto
import pro.komdosh.spbseekerserver.model.dto.route.subroute.UpdateSubRouteDto
import javax.persistence.*

@Entity
data class SubRoute(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        @ElementCollection
        var imgUrlList: List<String>,
        var description: String,
        @OneToMany(cascade = [CascadeType.MERGE, CascadeType.PERSIST])
        var locations: List<Location>
) : Meta() {

    fun toDto(): SubRouteDto = SubRouteDto(
            id = id!!,
            name = name,
            imgUrlList = imgUrlList,
            description = description,
            locations = locations.map { it.toDto() },
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateSubRouteDto) = SubRoute(
                id = null,
                name = dto.name,
                imgUrlList = dto.imgUrlList,
                description = dto.description,
                locations = dto.locations.map { location -> Location.fromDto(location) }
        )

        fun fromDto(dto: SubRouteDto) = SubRoute(
                id = dto.id,
                name = dto.name,
                imgUrlList = dto.imgUrlList,
                description = dto.description,
                locations = dto.locations.map { location -> Location.fromDto(location) }
        )

        fun fromDto(dto: UpdateSubRouteDto, entity: SubRoute): SubRoute {
            entity.name = dto.name ?: entity.name
            entity.imgUrlList = if (dto.imgUrlList.isEmpty()) entity.imgUrlList else dto.imgUrlList
            entity.description = dto.description ?: entity.description
            entity.locations = dto.locations.filter { location -> entity.locations.find { it.id == location.id } != null }
                    .map { location -> Location.fromDto(location, entity = entity.locations.find { it.id == location.id }!!) }

            return entity
        }
    }
}
