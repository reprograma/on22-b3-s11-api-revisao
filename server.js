const  app  =  require  ("./exercicios/para-casa/games/src/app")
const port = 7777;
app.listen(port, ()=>{
    console.log(`O servidor tá rodando na porta ${port}`)
})