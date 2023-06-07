const express = require("express")

const router = require("./router/petsRouter")

const app = express()
app.use(express.json())
app.use("/pets", router)

module.exports = app