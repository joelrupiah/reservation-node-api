import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('auth testing router')
})


export default router
