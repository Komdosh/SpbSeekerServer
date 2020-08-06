package pro.komdosh.spbseekerserver.repository

import pro.komdosh.spbseekerserver.model.entity.common.Image
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ImageRepository : CrudRepository<Image, String> {
    fun findAllByUserId(userId: Long): List<Image>
    fun findByIdAndUserId(imageId: String, userId: Long): Optional<Image>
}
