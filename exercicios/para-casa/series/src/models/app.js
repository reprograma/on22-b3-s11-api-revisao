const express = require("express")
const app = express()
app.use(express.json())

const seriesRoutes = require("./models/routes/seriesRoutes")

app.use("/series".seriesRoutes)

module.exports = app

