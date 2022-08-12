import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../contollers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// CHECK TOKEN

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send("You are logged in")
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send("You are logged in and you can delete your account")
})

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send("You are logged in as admin and you can delete all accounts")
})

// UPDATE USER

router.put('/:id', verifyUser, updateUser)

// DELETE USER

router.delete('/:id', verifyUser, deleteUser)

// GET SPECIFIC USER

router.get('/:id', verifyUser, getUser)

// GET ALL USERS

router.get('/', verifyAdmin, getUsers)

export default router
