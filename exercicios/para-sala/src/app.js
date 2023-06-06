const express = require('express');
const app = express();

app.use(express.json());

const routerPets = require('./router/routerPets');

app.use('/pets', routerPets);


module.exports = app;