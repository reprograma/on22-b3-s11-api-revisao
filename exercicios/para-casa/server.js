const app = require("./series/src/app");
const port = 1313;
app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
})