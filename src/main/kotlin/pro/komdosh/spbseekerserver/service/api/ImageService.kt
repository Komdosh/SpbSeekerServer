package pro.komdosh.spbseekerserver.service.api

import pro.komdosh.spbseekerserver.model.entity.common.Image
import java.io.InputStream


interface ImageService {
    fun upload(image: InputStream, originalName: String, contentType: String, userEmail: String): String
    fun download(imageId: String): Image
    fun usersImagesId(userEmail: String): List<String>
    fun deleteUserImage(imageId: String, userEmail: String): String
}
