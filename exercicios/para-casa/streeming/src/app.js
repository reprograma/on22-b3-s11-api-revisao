const express = require("express")
const app = express() 
app.use(express.json())

const routeGame = require("./routes/routeGame")
app.use("/streaming/list", routeGame)

const routeSerie = require("./routes/routeSerie")
app.use("/streaming/menu", routeSerie)

module.exports = app
