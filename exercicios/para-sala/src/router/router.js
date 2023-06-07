const express = require('express')
const router = express.Router()

const controllers = require('../controller/controllerPets')

router.get('/', controllers.getAllPets)
router.get('/:id', controllers.getById)
router.post('/cadastro', controllers.cadastro)

module.express = router