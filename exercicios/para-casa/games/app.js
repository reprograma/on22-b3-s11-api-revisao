const express = require("express") // importa express
const app = express() // executo o express

app.use(express.json()) // uso o body parse

const gamesRoutes = require("./src/routes/gamesRoutes") // importa as rotas de games
app.use("/games", gamesRoutes) // definou rota padrão para games

module.exports = app 