package com.bst.spbseekerserver.service.api

import java.io.InputStream


interface ImageService {
    fun upload(image: InputStream, fileExt: String): String
}