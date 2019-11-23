package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.model.entity.Hint
import com.bst.spbseekerserver.repository.HintRepository
import com.bst.spbseekerserver.service.api.HintService
import com.bst.spbseekerserver.service.api.UserService
import javassist.NotFoundException
import org.springframework.stereotype.Service


@Service
class HintServiceImpl(val hintRepository: HintRepository, val userService: UserService) : HintService {
    override fun getDto(id: Long): HintDto {
        return get(id).toDto()
    }

    override fun get(id: Long): Hint {
        logger.debug { "Attempting to fetch hint with id $id" }
        val hint = hintRepository.findById(id).orElseThrow {
            logger.error { "Hint with provided id: $id, doesn't exists" }
            throw NotFoundException("Hint with provided id doesn't exists")
        }
        logger.debug { "Fetched hint: $hint" }
        return hint
    }

    override fun getAll(): List<HintDto> {
        logger.debug { "Attempting to fetch all hints" }
        val hints = hintRepository.findAll().map { it.toDto() }
        logger.debug { "Fetched hints: $hints" }
        return hints
    }

    override fun delete(id: Long): Long {
        logger.debug { "Attempting to delete hint with id: $id" }
        val hint = hintRepository.findById(id).orElseThrow {
            logger.error { "Hint with provided id: $id, doesn't exists" }
            throw NotFoundException("Hint with provided id doesn't exists")
        }
        hintRepository.delete(hint)
        return id
    }

    override fun create(createDto: CreateHintDto): HintDto {
        logger.debug { "Attempting to create $createDto" }

        val savedCategory = hintRepository.save(Hint.fromDto(createDto))
        logger.debug { "Hint $savedCategory saved successfully" }
        return savedCategory.toDto()
    }

    override fun update(updateDto: UpdateHintDto, updatedId: Long): HintDto {
        logger.debug { "Attempting to update $updateDto" }

        val entity = get(updatedId)
        userService.checkBelong(entity.createdBy.id)

        val savedCategory = hintRepository.save(Hint.fromDto(updateDto, get(updatedId)))
        logger.debug { "Hint $savedCategory saved successfully" }
        return savedCategory.toDto()
    }
}
