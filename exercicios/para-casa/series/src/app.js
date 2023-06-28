const express = require("express");
const app = express();
app.use(express.json());

const seriesRoutes = require("./routes/seriesRoutes.js");
app.use("/series", seriesRoutes);

module.exports = app;
