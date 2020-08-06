package pro.komdosh.spbseekerserver.controller.api

import pro.komdosh.spbseekerserver.config.OpenAPIConfiguration
import pro.komdosh.spbseekerserver.controller.api.ImageController.Companion.CONTROLLER_URL
import pro.komdosh.spbseekerserver.model.dto.file.UploadResponseDto
import pro.komdosh.spbseekerserver.model.dto.file.UserImageDto
import pro.komdosh.spbseekerserver.service.api.ImageService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import io.swagger.v3.oas.annotations.media.ArraySchema
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.security.SecurityRequirement
import io.swagger.v3.oas.annotations.tags.Tag
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
@Tag(name = "Images API", description = "REST API for operations with images")
@RequestMapping(value = [CONTROLLER_URL], produces = [MediaType.APPLICATION_JSON_VALUE])
class ImageController(val imageService: ImageService) {

    companion object {
        const val CONTROLLER_URL = "/api/v1/image/"
    }

    @PostMapping
    @Operation(description = "Upload image",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = UploadResponseDto::class)
                        )
                    ])
            ])
    fun upload(
            @Parameter(required = true, name = "Image ByteStream")
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
    @Operation(description = "Upload array of images image",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                array = ArraySchema(
                                        schema = Schema(implementation = UploadResponseDto::class)
                                )
                        )
                    ])
            ])
    fun uploadMultiple(
            @Parameter(required = true, name = "Image ByteStream Array")
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
    @Operation(description = "Download image",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                schema = Schema(implementation = Resource::class)
                        )
                    ])
            ])
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
    @Operation(description = "Delete image by id",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                schema = Schema(implementation = String::class)
                        )
                    ])
            ])
    fun delete(
            @PathVariable imageId: String, principal: Principal
    ): String {
        return imageService.deleteUserImage(imageId, principal.name)
    }

    @GetMapping("/user")
    @Operation(description = "Get list of user's images",
            security = [SecurityRequirement(name = OpenAPIConfiguration.SECURITY_SCHEME)],
            responses = [ApiResponse(
                    responseCode = "200",
                    content = [
                        Content(
                                mediaType = MediaType.APPLICATION_JSON_VALUE,
                                array = ArraySchema(
                                        schema = Schema(implementation = UserImageDto::class)
                                )
                        )
                    ])
            ])
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
