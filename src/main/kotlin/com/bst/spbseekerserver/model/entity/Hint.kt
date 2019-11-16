package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.hint.HintDto
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
        @Enumerated(EnumType.STRING) var hintAction: HintAction
) {

    fun toDto(): HintDto = HintDto(
            id,
            name,
            imgUrl,
            description,
            shortDescription,
            hintAction
    )

    fun update(hintDto: HintDto) {
        name = hintDto.name
        imgUrl = hintDto.imgUrl
        description = hintDto.description
        shortDescription = hintDto.shortDescription
        hintAction = hintDto.hintAction
    }
}
