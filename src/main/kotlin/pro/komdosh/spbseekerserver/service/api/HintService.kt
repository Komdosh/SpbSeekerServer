package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.dto.hint.CreateHintDto
import pro.komdosh.spbseekerserver.model.dto.hint.HintDto
import pro.komdosh.spbseekerserver.model.dto.hint.UpdateHintDto
import pro.komdosh.spbseekerserver.model.entity.Hint

interface HintService : ResourceService<HintDto, CreateHintDto, UpdateHintDto, Hint>
