
const app = require ("./src/app");
const port = 1313;

app.listen(port, () => {
console.log(`Servidor está rodando na porta ${port}`)
})



/* Em resumo, esse código inicia o servidor Express na porta 1313 e exibe uma mensagem no console informando
que o servidor está rodando na porta especificada.*/






























// try {
//     const numbers = [1, 2, 3, 2, 1];

//     const result = numbers.find(number => {
//     if (number > 1){

//    // throw new Error("Opa")
//     }
// });
//     console.log(result);
//   } catch (error) {
//     console.error('Ocorreu um erro:', error.message);
//   }









// const usuarios = [
//     { id: 4, nome: 'Camila', idade: 20 }, //true
//     { id: 1, nome: 'Alice', idade: 25 }, //false
//     { id: 2, nome: 'Bob', idade: 30 }, //true
//     { id: 3, nome: 'Carol', idade: 11 } //true

//   ];

// //const user = usuarios.find(user => user.id === 2);
// //const userIndex = usuarios.findIndex(user => user.idade === 35);
// const filterUsers = usuarios.filter(user => user.idade < 25);

//   console.log(filterUsers)

