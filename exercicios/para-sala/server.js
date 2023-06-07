const app = require("./src/app")
const PORT = 8080

app.listen(PORT, () => {
  console.log(`server up and running.`)
  console.log(`listening to requests on port: ${PORT}`);
})

const express = require('express');
const app = expresss();

app.use(express.json());

module.exports = app;