const express = require("express");

const petRouter = require("./router/petRouter")

const app = express();

app.use(express.json());
app.use("/pets", petRouter)

module.exports = app