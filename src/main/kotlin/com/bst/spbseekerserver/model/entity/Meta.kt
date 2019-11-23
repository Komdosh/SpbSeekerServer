package com.bst.spbseekerserver.model.entity

import com.bst.spbseekerserver.model.dto.meta.MetaDto
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.util.*
import javax.persistence.EntityListeners
import javax.persistence.ManyToOne
import javax.persistence.MappedSuperclass

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
open class Meta(
        @ManyToOne
        @CreatedBy open var createdBy: User = User(null, "", "", emptySet()),
        @ManyToOne
        @LastModifiedBy open var modifiedBy: User = User(null, "", "", emptySet()),
        @CreationTimestamp open val created: Date = Date(),
        @UpdateTimestamp open val modified: Date = Date()
) {
    fun metaDto(): MetaDto = MetaDto(
            createdBy = createdBy.toCreatedByDto(),
            modifiedBy = modifiedBy.toModifiedByDto(),
            created = created,
            modified = modified
    )
}
