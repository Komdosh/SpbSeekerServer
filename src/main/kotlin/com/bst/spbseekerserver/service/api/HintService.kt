package com.bst.spbseekerserver.service.api

import com.bst.spbseekerserver.model.dto.hint.CreateHintDto
import com.bst.spbseekerserver.model.dto.hint.HintDto
import com.bst.spbseekerserver.model.dto.hint.UpdateHintDto
import com.bst.spbseekerserver.model.entity.Hint

interface HintService : ResourceService<HintDto, CreateHintDto, UpdateHintDto, Hint>
