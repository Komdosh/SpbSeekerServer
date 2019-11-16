package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.model.entity.DBFile
import com.bst.spbseekerserver.model.entity.Image
import com.bst.spbseekerserver.repository.ImageRepository
import com.bst.spbseekerserver.service.api.ImageService
import com.bst.spbseekerserver.service.api.UserService
import javassist.NotFoundException
import org.springframework.stereotype.Service
import java.io.InputStream
import java.util.*
import javax.transaction.Transactional


@Service
class ImageServiceImpl(private val imageRepository: ImageRepository, private val userService: UserService) : ImageService {
    @Transactional
    override fun deleteUserImage(imageId: String, userEmail: String): String {
        val userId = userService.getUserByEmail(userEmail).id!!
        imageRepository.findByIdAndUserId(imageId, userId).orElseThrow { NotFoundException("Not found image for that $imageId and $userId") }
        imageRepository.deleteById(imageId)
        return imageId
    }

    @Transactional
    override fun upload(image: InputStream, originalName: String, contentType: String, userEmail: String): String {
        val userId = userService.getUserByEmail(userEmail).id!!

        val fileExt = originalName.split(".").last()
        val fileName = "img_${Date().time}.$fileExt"
        val fileEntity = imageRepository.save(Image(null, fileName, userId, contentType, DBFile(null, image.readAllBytes())))

        logger.info { "Upload result: $fileEntity, ${fileEntity.id}" }
        return fileEntity.id.toString()
    }

    override fun download(imageId: String): Image {
        return imageRepository.findById(imageId)
                .orElseThrow { NotFoundException("File not found with id $imageId") }
    }

    @Transactional
    override fun usersImagesId(userEmail: String): List<String> {
        val userId = userService.getUserByEmail(userEmail).id!!
        return imageRepository.findAllByUserId(userId).map { it.id!! }
    }
}
