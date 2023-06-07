const app = require("./src/app");
const router = require("./src/router/router");

app.use(router);

const PORT = 1313;
app.listen(PORT , ()=>{
    console.log(`To rodando na porta ${PORT}`)
});