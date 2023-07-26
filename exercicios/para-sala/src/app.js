const express = require("express")

const routerPets = require("./router/routerPets")

const app = express()

app.use(express.json())
app.use("/pets", routerPets)

module.exports = app;


