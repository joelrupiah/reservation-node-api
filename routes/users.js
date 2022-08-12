import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../contollers/user.js'
import { verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

// CHECK TOKEN

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send("You are logged in")
})

// UPDATE USER

router.put('/:id', updateUser)

// DELETE USER

router.delete('/:id', deleteUser)

// GET SPECIFIC USER

router.get('/:id', getUser)

// GET ALL USERS

router.get('/', getUsers)

export default router
