import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('users router test')
})

export default router
