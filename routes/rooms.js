import express from 'express'
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from '../contollers/room.js'
import { verifyToken, verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE ROOMS

router.post('/:hotelid', verifyAdmin, createRoom)

// UPDATE ROOMS

router.put('/:id', verifyAdmin, updateRoom)

// DELETE ROOMS

router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)

// GET SPECIFIC ROOM

router.get('/:id', getRoom)

// GET ALL ROOMS

router.get('/', getRooms)

export default router
