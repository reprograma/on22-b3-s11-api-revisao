const express = require ("express")
const app = express ()
app.use(express.json())
const gamesRouter = require ("./Router/gamesRoutes")
app.use("/games", gamesRouter)


module.exports = app



