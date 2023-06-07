const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send("Bem vinda(o) ao GeekDocs, seu site sobre games, séries e muito mais");
})

const gameRoutes = require('./games/routes/gameRoutes');
app.use('/games', gameRoutes);

const seriesRoutes = require('./series/routes/seriesRoutes');
app.use('/series', seriesRoutes);



module.exports = app