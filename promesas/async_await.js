/* Definimos a função esperar que retorna uma Promise que aguarda um
determinado número de milissegundos usando setTimeout.*/
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemplo() { //Definimos a função exemplo como assíncrona usando a palavra-chave async.
  console.log("Início"); //Exibimos a mensagem "Início" no console.

  await esperar(2000); // Usando await, aguardamos 2 segundos (2000 milissegundos) chamando a função esperar.
  console.log("Após 2 segundos"); //Exibimos a mensagem "Após 2 segundos" no console.

  await esperar(1500); // Usando await, aguardamos 1,5 segundos (1500 milissegundos) chamando novamente a função esperar.
  console.log("Após 1,5 segundos"); //Exibimos a mensagem "Após 1,5 segundos" no console.

  console.log("Fim"); //Exibimos a mensagem "Fim" no console.
}

exemplo(); //Chamamos a função exemplo para iniciar a execução assíncrona.

/* Em resumo, o código define uma função esperar que aguarda um determinado tempo usando uma Promise.
A função exemplo utiliza await para aguardar esses tempos específicos e exibe mensagens no console
indicando os momentos de início, pausas e fim da execução assíncrona.*/