import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {text: 'new text'})
})

module.exports = router