package com.bst.spbseekerserver.controller.api

import com.bst.spbseekerserver.controller.api.ImageController.Companion.CONTROLLER_URL
import com.bst.spbseekerserver.model.dto.file.UploadResponseDto
import com.bst.spbseekerserver.model.dto.file.UserImageDto
import com.bst.spbseekerserver.service.api.ImageService
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiParam
import org.springframework.core.io.ByteArrayResource
import org.springframework.core.io.Resource
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType
import org.springframework.http.MediaType.IMAGE_PNG
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.security.Principal


@RestController
@Api(value = "hint", description = "Rest API for operations with images", tags = ["Image API"])
@RequestMapping(value = [CONTROLLER_URL], produces = [MediaType.APPLICATION_JSON_VALUE])
class ImageController(val imageService: ImageService) {

    companion object {
        const val CONTROLLER_URL = "/api/v1/image/"
    }

    @ApiOperation(value = "Upload image", response = UploadResponseDto::class)
    @PostMapping
    fun upload(
            @ApiParam(required = true, value = "Image ByteStream")
            @RequestParam("image") image: MultipartFile, principal: Principal
    ): UploadResponseDto {
        val url = imageService.upload(image.inputStream,
                image.originalFilename?.split(".")?.last()
                        ?: throw IllegalArgumentException("There is no file extension"),
                image.contentType ?: IMAGE_PNG.toString(), principal.name)
        val fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path(CONTROLLER_URL)
                .path(url)
                .toUriString()
        return UploadResponseDto(fileDownloadUri, image.size)
    }

    @PostMapping("/multiple")
    @ApiOperation(value = "Upload array of images", responseContainer = "List",
            response = UploadResponseDto::class)
    fun uploadMultiple(
            @ApiParam(required = true, value = "Image ByteStream Array")
            @RequestParam("images") images: Array<MultipartFile>, principal: Principal
    ): List<UploadResponseDto> {
        require(images.none {
            it.originalFilename?.split(".")?.last().isNullOrEmpty()
        }) { "There is no file extension for some of $images" }

        return images.map {
            val url = imageService.upload(it.inputStream, it.originalFilename!!, it.contentType
                    ?: IMAGE_PNG.toString(), principal.name)
            val fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path(CONTROLLER_URL)
                    .path(url)
                    .toUriString()
            UploadResponseDto(fileDownloadUri, it.size)
        }
    }

    @GetMapping("/{imageId}")
    @ApiOperation(value = "Download image", response = Resource::class)
    fun download(
            @PathVariable imageId: String
    ): ResponseEntity<Resource> {
        val image = imageService.download(imageId)

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(image.fileType))
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" + image.fileName + "\"")
                .body(ByteArrayResource(image.dbFile.data))
    }

    @DeleteMapping("/{imageId}")
    @ApiOperation(value = "Delete image by id", response = String::class)
    fun delete(
            @PathVariable imageId: String, principal: Principal
    ): String {
        return imageService.deleteUserImage(imageId, principal.name)
    }

    @GetMapping("/user")
    @ApiOperation(value = "Get list of user's images", responseContainer = "List",
            response = UserImageDto::class)
    fun user(principal: Principal): List<UserImageDto> {
        return imageService.usersImagesId(principal.name).map {
            val fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path(CONTROLLER_URL)
                    .path(it)
                    .toUriString()
            UserImageDto(fileDownloadUri)
        }
    }
}
