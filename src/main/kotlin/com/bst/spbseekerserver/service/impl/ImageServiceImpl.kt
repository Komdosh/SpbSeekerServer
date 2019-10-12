package com.bst.spbseekerserver.service.impl

import com.bst.spbseekerserver.logger
import com.bst.spbseekerserver.service.api.ImageService
import com.github.pelenthium.selectel.SelectelClientBuilder
import com.github.pelenthium.selectel.commands.Upload
import org.springframework.stereotype.Service
import java.io.InputStream
import java.util.*

@Service
class ImageServiceImpl : ImageService {

    override fun upload(image: InputStream, fileExt: String): String {
        val client = SelectelClientBuilder.create()
                .authorize("99509_atabakov", "123")
                .bucket("SpbSeeker")
                .build()

        val uploadResult = client.execute(Upload(image, "img_${Date().time}.$fileExt"))
        logger.info { "Upload result: $uploadResult, ${uploadResult.path}" }
        return uploadResult.path
    }
}