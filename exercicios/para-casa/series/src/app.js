const express =  require("express");
const seriesRoute = require("./routes/routes");
const app = express();

app.use(express.json());
app.use("/series", seriesRoute);

module.exports = app;