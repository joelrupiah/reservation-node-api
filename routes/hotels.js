import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../contollers/hotel.js'

const router = express.Router()

// CREATE HOTEL

router.post('/', createHotel)

// UPDATE HOTEL

router.put('/:id', updateHotel)

// DELETE HOTEL

router.delete('/:id', deleteHotel)

// GET SPECIFIC HOTEL

router.get('/:id', getHotel)

// GET ALL HOTELS

router.get('/', getHotels)

export default router
