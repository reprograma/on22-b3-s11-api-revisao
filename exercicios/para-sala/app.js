const express = require ("express")
const app = express ()
app.use(express.json())
const petsRouter = require (`./src/Router/petsRouter`)
app.use("/pets",petsRouter)




module.exports = app