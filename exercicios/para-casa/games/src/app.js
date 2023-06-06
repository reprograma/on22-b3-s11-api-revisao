const express = require("express");
const app = express();
app.use(express.json());

const gamesRoutes = require("./router/gamesRouter");
app.use("/", gamesRoutes);

module.exports = app;
