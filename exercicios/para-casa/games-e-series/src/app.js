const express = require('express')
const app = express()

app.use(express.json())
const gamesRouter = require('./router/games-router')
const seriesRouter = require('./router/series-router')



app.use('/games', gamesRouter)
app.use('/series', seriesRouter)

module.exports = app


