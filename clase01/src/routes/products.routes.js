const { Router } = require('express')

const router = Router()

router.get('/products', (req, res) => {
  res.json('Obtuviste los productos')
})

module.exports = {
  router
}