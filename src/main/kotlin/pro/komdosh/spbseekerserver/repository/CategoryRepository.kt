package pro.komdosh.spbseekerserver.repository

import pro.komdosh.spbseekerserver.model.entity.Category
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository : CrudRepository<Category, Long>
