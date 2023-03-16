const { Router } = require('express')
const { getUsers, createUser, editUser } = require('../controllers/users')

const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users', editUser)


module.exports = {
  router
}
