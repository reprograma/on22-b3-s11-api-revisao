const express = require("express") 
const app = express()
app.use(express.json()) 

const seriesRoutes = require("./routes/seriesRoutes") 
app.use("/seriesReprograma", seriesRoutes) 

module.exports = app