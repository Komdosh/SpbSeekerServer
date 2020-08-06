package pro.komdosh.spbseekerserver.repository

import pro.komdosh.spbseekerserver.model.entity.Location
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface LocationRepository : CrudRepository<Location, Long>
