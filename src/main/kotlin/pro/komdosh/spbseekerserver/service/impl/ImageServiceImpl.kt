package pro.komdosh.spbseekerserver.service.impl

import pro.komdosh.spbseekerserver.auth.service.api.UserService
import pro.komdosh.spbseekerserver.logger
import pro.komdosh.spbseekerserver.model.entity.common.DBFile
import pro.komdosh.spbseekerserver.model.entity.common.Image
import pro.komdosh.spbseekerserver.repository.ImageRepository
import pro.komdosh.spbseekerserver.service.api.ImageService
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
