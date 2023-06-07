const express = require('express')

const router = express.Router()

const controller = require('../controllers/controller')

router.get('/all', controller.getAllPets)
router.get('/get/:id', controller.getById)
router.post('/add', controller.updateList)

module.exports = router