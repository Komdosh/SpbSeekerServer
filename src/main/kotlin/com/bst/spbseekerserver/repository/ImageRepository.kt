package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Image
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface ImageRepository : CrudRepository<Image, String> {
    fun findAllByUserId(userId: Long): List<Image>
    fun findByIdAndUserId(imageId: String, userId: Long): Optional<Image>
}
