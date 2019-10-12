package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Hint
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface HintRepository : CrudRepository<Hint, Long>