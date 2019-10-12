package com.bst.spbseekerserver.repository

import com.bst.spbseekerserver.model.entity.Travel
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TravelRepository : CrudRepository<Travel, Long> {
}