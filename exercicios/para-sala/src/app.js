const express = require("express")

const app = express()
app.use(express.json())

const petsRoutes = require("./routes/petsRoutes")
app.use("/pets", petsRoutes)

module.exports = app