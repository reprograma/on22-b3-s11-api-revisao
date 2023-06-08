function obterDados() { //Definimos a função obterDados que retorna uma Promise.
  return new Promise((resolve, reject) => {

    setTimeout(() => { //Dentro da Promise, usamos setTimeout para simular uma operação assíncrona que leva 2 segundos.
      const sucesso = true; //Dentro do setTimeout, definimos uma variável sucesso como true.

      if (sucesso) { //Se sucesso for verdadeiro, resolvemos a Promise usando resolve e passamos a mensagem "Dados obtidos com sucesso!".
        resolve("Dados obtidos com sucesso!");
      } else { //Caso contrário, rejeitamos a Promise usando reject e passamos a mensagem "Erro ao obter os dados.".
        reject("Erro ao obter os dados.");
      }
    }, 2000);
  });
}

obterDados()
  .then(resultado => { //Chamamos a função obterDados() e encadeamos o método then para lidar com a resolução da Promise.
    console.log(resultado); //No callback do then, exibimos o resultado no console usando console.log(resultado).
  })
  .catch(erro => { //Encadeamos o método catch para lidar com a rejeição da Promise.
    console.log(erro); //No callback do catch, exibimos o erro no console usando console.log(erro).
  });


/* Em resumo, esse código define uma função obterDados que retorna uma Promise simulando uma operação assíncrona
de obtenção de dados. Se a operação for bem-sucedida, a Promise é resolvida com a mensagem "Dados obtidos com sucesso!".
Caso contrário, a Promise é rejeitada com a mensagem "Erro ao obter os dados.". O código utiliza os métodos then e
catch para lidar com a resolução ou rejeição da Promise e exibir os resultados ou erros no console.*/


//Abaixo cosigo que resulta a rejeição. Lembrar de comentar para não dar a mesma resposta.

// //ERRO
// function obterDados() {
//     return new Promise((resolve, reject) => {

//       setTimeout(() => {
//         const sucesso = false; ////Dentro do setTimeout, definimos uma variável sucesso como false.

//         if (sucesso) {
//           resolve("Dados obtidos com sucesso!");
//         } else {
//           reject("Erro ao obter os dados.");
//         }
//       }, 2000);
//     });
//   }

//   obterDados()
//     .then(resultado => {console.log(resultado);})
//     .then(resultado => {console.log(resultado);})
//     .catch(erro => {console.log(erro);});