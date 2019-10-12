package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.service.api.ImageService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@Api(value = "hint", description = "Rest API for operations with images", tags = ["Image API"])
@RequestMapping(value = ["/api/v1/image"], produces = [MediaType.APPLICATION_JSON_VALUE])
class ImageController(val imageService: ImageService) {
    @ApiOperation(value = "Upload Image, return raw string", response = String::class)
    @PostMapping
    fun upload(
            @ApiParam(required = true, value = "Image ByteStream")
            @RequestParam("image") multipartFile: MultipartFile,
            @ApiParam(required = true, value = "File Extension")
            @RequestParam("fileExt") fileExt: String): String = imageService.upload(multipartFile.inputStream, fileExt)
}