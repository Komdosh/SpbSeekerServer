package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.HintDto
import com.bst.spbseekerserver.model.entity.Hint
import com.bst.spbseekerserver.repository.HintRepository
import com.bst.spbseekerserver.service.api.HintService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class HintServiceImpl(val hintRepository: HintRepository) : HintService {
    override fun getHint(id: Long): HintDto {
        return getHintEntity(id).toDto()
    }

    override fun getHintEntity(id: Long): Hint {
        logger.debug { "Attempting to fetch hint with id $id" }
        val hint = hintRepository.findById(id).orElseThrow {
            logger.error { "Hint with provided id: $id, doesn't exists" }
            throw NotFoundException("Hint with provided id doesn't exists")
        }
        logger.debug { "Fetched hint: $hint" }
        return hint
    }

    override fun getAllHints(): List<HintDto> {
        logger.debug { "Attempting to fetch all hints" }
        val hints = hintRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched hints: $hints" }
        return hints
    }

    override fun deleteHint(id: Long): Long {
        logger.debug { "Attempting to delete hint with id: $id" }
        val hint = hintRepository.findById(id).orElseThrow {
            logger.error { "Hint with provided id: $id, doesn't exists" }
            throw NotFoundException("Hint with provided id doesn't exists")
        }
        hintRepository.delete(hint)
        return id
    }

    override fun saveHint(hint: HintDto): HintDto {
        logger.debug { "Attempting to save hint $hint" }


        var hintEntity = hint.toEntity()
        hint.id?.let {
            hintEntity = getHintEntity(it)
            hintEntity.update(hint)
        }


        val savedHint = hintRepository.save(hintEntity).toDto()
        logger.debug { "Hint $savedHint saved successfully" }
        return savedHint
    }
}