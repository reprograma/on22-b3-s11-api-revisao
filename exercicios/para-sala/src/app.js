const express =require("express");
const petsRout = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/pets", petsRout);

module.exports = app;