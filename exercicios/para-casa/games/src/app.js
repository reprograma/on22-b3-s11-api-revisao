const express = require('express') 
const app = express() 
app.use(express.json()) 

const gamesRoutes = require("./routes/gamesRoutes") 
app.use("exercicios/para-casa/games", gamesRoutes)

module.exports = app