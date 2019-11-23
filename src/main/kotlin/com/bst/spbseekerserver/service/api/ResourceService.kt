package com.bst.spbseekerserver.service.api

interface ResourceService<DTO, CREATE_DTO, UPDATE_DTO, ENTITY> {
    fun getDto(id: Long): DTO
    fun get(id: Long): ENTITY
    fun getAll(): List<DTO>
    fun create(createDto: CREATE_DTO): DTO
    fun update(updateDto: UPDATE_DTO, updatedId: Long): DTO
    fun delete(id: Long): Long
}
