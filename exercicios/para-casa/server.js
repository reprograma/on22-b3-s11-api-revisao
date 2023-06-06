const app = require('./src/app');

const PORT = 7788;

app.listen(PORT, ()=> {
    console.log(`localhost:${PORT}/`)
})