package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.model.enums.HintAction
import javax.persistence.*

@Entity
data class Hint(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long?,
        var name: String,
        var imgUrl: String,
        var description: String,
        var shortDescription: String,
        @Enumerated(EnumType.STRING) val hintAction: HintAction
) : Meta() {

    fun toDto(): HintDto = HintDto(
            id = id!!,
            name = name,
            imgUrl = imgUrl,
            description = description,
            shortDescription = shortDescription,
            hintAction = hintAction,
            meta = metaDto()
    )

    companion object {
        fun fromDto(dto: CreateHintDto) = Hint(
                id = null,
                name = dto.name,
                imgUrl = dto.imgUrl,
                description = dto.description,
                shortDescription = dto.shortDescription,
                hintAction = dto.hintAction)

        fun fromDto(dto: UpdateHintDto, entity: Hint): Hint {
            entity.name = dto.name ?: entity.name
            entity.imgUrl = dto.imgUrl ?: entity.imgUrl
            entity.description = dto.description ?: entity.description
            entity.shortDescription = dto.shortDescription ?: entity.shortDescription
            return entity
        }
    }
}
