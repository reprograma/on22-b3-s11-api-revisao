function soAceitaPares(numero) { //Definimos a função soAceitaPares que retorna uma Promise.
    const promise = new Promise((resolve, reject) => { //Criamos uma Promise que verifica se o número fornecido é par ou ímpar.
      if (numero % 2 === 0) {
        const resultado = 'Viva, é par!';//Se o número for par, resolvemos a Promise com a mensagem "Viva, é par!".
        resolve(resultado);
      } else {
        reject(new Error("Você passou um número ímpar!"));//Caso contrário, rejeitamos a Promise com um erro informando que foi passado um número ímpar.
      }
    });
    return promise; //Retornamos a Promise criada pela função soAceitaPares.
  }

  console.log("promessa"); //Exibimos a mensagem "promessa" no console.

  soAceitaPares(4) //Chamamos a função soAceitaPares com o número 4.
    .then(resultado => { //Utilizamos o método then para lidar com a resolução da Promise.
      console.log(resultado); //No callback do then, exibimos o resultado no console.
    })
    .catch(error => { //Utilizamos o método catch para lidar com a rejeição da Promise.
      console.error(error.message); //No callback do catch, exibimos a mensagem de erro no console.
    });

    /* Em resumo, o código define uma função que retorna uma Promise para verificar se um número é par ou ímpar.
    A Promise é resolvida com uma mensagem se o número for par e é rejeitada com um erro se o número for ímpar.
    Em seguida, lidamos com a Promise usando then para exibir o resultado e catch para exibir a mensagem de erro
    no console.*/