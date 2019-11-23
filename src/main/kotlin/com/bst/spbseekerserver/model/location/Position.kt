package com.bst.spbseekerserver.model.location

import kotlin.math.*

const val EARTH_RADIUS = 6371 // Radius of the earth

data class Position(val latitude: Double, val longitude: Double, val altitude: Double = 0.0) {
    fun distanceTo(target: Position): Double {
        val latDistance = Math.toRadians(target.latitude - latitude)
        val lonDistance = Math.toRadians(target.longitude - longitude)
        val a = sin(latDistance / 2) * sin(latDistance / 2) + (cos(Math.toRadians(latitude)) * cos(Math.toRadians(target.latitude))
                * sin(lonDistance / 2) * sin(lonDistance / 2))
        val c = 2 * atan2(sqrt(a), sqrt(1 - a))
        var distance = EARTH_RADIUS.toDouble() * c * 1000.0 // convert to meters

        val height = altitude - target.altitude

        distance = distance.pow(2.0) + height.pow(2.0)

        return sqrt(distance)
    }
}
