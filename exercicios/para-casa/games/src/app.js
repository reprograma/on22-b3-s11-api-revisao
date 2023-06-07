const express = require('express')
const app = express()
app.use(express.json())

const routerGames = require('./router/routerGames')

app.use('/games', routerGames)

module.exports = app