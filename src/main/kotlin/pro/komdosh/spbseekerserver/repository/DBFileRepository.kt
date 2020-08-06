package pro.komdosh.spbseekerserver.repository

import pro.komdosh.spbseekerserver.model.entity.common.DBFile
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface DBFileRepository : CrudRepository<DBFile, String>
