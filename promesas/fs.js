const fs = require('fs');//Importamos o módulo fs do Node.js utilizando require('fs').

//Usamos o método writeFile do módulo fs para escrever o conteúdo "Olá, maravilhosas!" no arquivo chamado "minha-reprograma.txt".
fs.writeFile('minha-reprograma.txt', 'Olá, maravilhosas!', (err) => { //O método writeFile recebe três argumentos: o nome do arquivo a ser criado ('minha-reprograma.txt'), o conteúdo a ser escrito ('Olá, maravilhosas!') e uma função de callback.
  if (err) {
    console.log('Ocorreu um erro ao criar o arquivo:', err); //Dentro da função de callback, verificamos se ocorreu algum erro. Se err for verdadeiro, exibimos a mensagem "Ocorreu um erro ao criar o arquivo:" seguida do erro específico.
  } else {
    console.log('Arquivo criado com sucesso!'); //Caso contrário, se não houver erros, exibimos a mensagem "Arquivo criado com sucesso!".
  }
});


/* Em resumo, esse código utiliza o módulo fs do Node.js para criar um arquivo chamado "minha-reprograma.txt"
e escrever nele o conteúdo "Olá, maravilhosas!". Ele trata possíveis erros durante a operação e exibe mensagens
de sucesso ou de erro no console.*/
