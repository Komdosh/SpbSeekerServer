package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.entity.Hint

interface HintService {
    fun getHint(id: Long): HintDto
    fun getHintEntity(id: Long): Hint
    fun getAllHints(): List<HintDto>
    fun deleteHint(id: Long): Long
    fun saveHint(hint: HintDto): HintDto
}
