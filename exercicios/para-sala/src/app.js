const express = require('express')

const routePets = require('./routes/routePets')

const app = express()

app.use(express.json())

app.use('/pets', routePets)

module.exports = app