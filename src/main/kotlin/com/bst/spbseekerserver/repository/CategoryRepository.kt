package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Category
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository : CrudRepository<Category, Long>