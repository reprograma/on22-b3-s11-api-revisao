const app = require('./src/app');
const PORT = 2020;

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});