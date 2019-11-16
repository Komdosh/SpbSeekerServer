package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.DBFile
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface DBFileRepository : CrudRepository<DBFile, String>
