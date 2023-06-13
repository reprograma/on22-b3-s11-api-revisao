const express = require("express");
const gamesRoute = require("../router/routes");
const app = express();

app.use(express.json());
app.use("/games", gamesRoute);

module.exports = app;