function dividir(a, b) { //Definimos a função dividir que recebe dois parâmetros, a e b.
  try { //Dentro do bloco try, verificamos se o valor de b é igual a zero.
    if (b === 0) { //Se b for igual a zero, lançamos uma exceção com a mensagem "Divisão por zero não é permitida." usando throw new Error().
      throw new Error("Divisão por zero não é permitida.");
    }

    return a / b; //Caso contrário, a função retorna o resultado da divisão de a por b.
  } catch (error) { //Se ocorrer algum erro dentro do bloco try, o código dentro do bloco catch é executado.
    console.log("Ocorreu um erro:", error.message); //Dentro do bloco catch, exibimos a mensagem de erro no console usando console.log("Ocorreu um erro:", error.message).
  }
}

console.log(dividir(10, 2)); // Chamamos a função dividir passando os argumentos 10 e 2. O resultado da divisão é exibido no console, que no caso é 5.
console.log(dividir(10, 0)); // Chamamos a função dividir novamente, desta vez passando 10 e 0 como argumentos. Como isso resulta em uma divisão por zero, um erro é lançado e a mensagem de erro é exibida no console.


/* Em resumo, esse código define uma função dividir que realiza a divisão de dois números.
Ele verifica se o divisor (b) é igual a zero antes de realizar a divisão e lança uma exceção
com uma mensagem personalizada se for o caso. Se nenhum erro ocorrer, o resultado da divisão é
retornado. As chamadas à função dividir demonstram o funcionamento correto e o tratamento de
erros quando há uma divisão por zero.*/