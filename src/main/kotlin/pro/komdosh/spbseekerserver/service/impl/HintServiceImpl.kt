package pro.komdosh.spbseekerserver.service.impl

import pro.komdosh.spbseekerserver.auth.service.api.UserService
import pro.komdosh.spbseekerserver.logger
import pro.komdosh.spbseekerserver.model.dto.hint.CreateHintDto
import pro.komdosh.spbseekerserver.model.dto.hint.HintDto
import pro.komdosh.spbseekerserver.model.dto.hint.UpdateHintDto
import pro.komdosh.spbseekerserver.model.entity.Hint
import pro.komdosh.spbseekerserver.repository.HintRepository
import pro.komdosh.spbseekerserver.service.api.HintService
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

        val entity = get(id)
        userService.checkBelong(entity.createdBy.id)

        hintRepository.delete(entity)
        return id
    }

    override fun create(createDto: CreateHintDto): HintDto {
        logger.debug { "Attempting to create $createDto" }

        val saved = hintRepository.save(Hint.fromDto(createDto))
        logger.debug { "Hint $saved saved successfully" }
        return saved.toDto()
    }

    override fun update(updateDto: UpdateHintDto, updatedId: Long): HintDto {
        logger.debug { "Attempting to update $updateDto" }

        val entity = get(updatedId)
        userService.checkBelong(entity.createdBy.id)

        val saved = hintRepository.save(Hint.fromDto(updateDto, get(updatedId)))
        logger.debug { "Hint $saved saved successfully" }
        return saved.toDto()
    }
}
