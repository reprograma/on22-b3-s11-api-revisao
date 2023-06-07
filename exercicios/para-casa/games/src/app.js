const express = require("express")
const app = express()
app.use(express.json())

const gameRouter = require("./router/gamesRouter")

app.use("/games", gameRouter)

module.exports = app