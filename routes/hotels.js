import express from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel, countByCity } from '../contollers/hotel.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE HOTEL

router.post('/', verifyAdmin, createHotel)

// UPDATE HOTEL

router.put('/:id', verifyAdmin, updateHotel)

// DELETE HOTEL

router.delete('/delete/:id', verifyAdmin, deleteHotel)

// GET SPECIFIC HOTEL

router.get('/getHotels/:id', getHotel)

// GET ALL HOTELS

router.get('/', getHotels)

router.get('/countByCity', countByCity)

router.get('/countByType', getHotels)


export default router
