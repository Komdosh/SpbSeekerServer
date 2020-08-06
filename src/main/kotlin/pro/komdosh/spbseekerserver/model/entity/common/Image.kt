package pro.komdosh.spbseekerserver.model.entity.common

import org.hibernate.annotations.GenericGenerator
import javax.persistence.*


@Entity
data class Image(
        @GeneratedValue(generator = "uuid")
        @GenericGenerator(name = "uuid", strategy = "uuid2")
        @Id val id: String?,
        val fileName: String,
        val userId: Long,
        val fileType: String,
        @OneToOne(fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
        @JoinColumn(name = "imageId", referencedColumnName = "id")
        val dbFile: DBFile
)
