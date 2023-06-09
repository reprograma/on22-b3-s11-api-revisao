/* Importamos o módulo 'fs', que é uma biblioteca do Node.js que permite trabalhar com arquivos.
Com isso, podemos acessar várias funções úteis para lidar com operações de arquivo. */
const fs = require('fs')

console.log("Inicio") //Mandamos uma mensagem "Inicio" pro console, tipo "E aí, galera!".

/* Utilizamos a função fs.writeFileSync para criar um arquivo chamado 'arquivo.txt' e escrever
nele o conteúdo "Olá Reprograma". Essa função recebe dois argumentos: o primeiro é o nome do
arquivo que queremos criar ou modificar ('arquivo.txt' no caso), e o segundo é o conteúdo que
desejamos escrever no arquivo ("Olá Reprograma" no caso). Com isso, o arquivo é criado ou sobrescrito
com o novo conteúdo.*/
fs.writeFileSync('arquivo.txt', 'Olá Reprograma')

console.log('Fim') //Mandamos outra mensagem pro console, tipo "Valeu, pessoal! Acabou aqui!".


/* Em resumo, o código cria um arquivo de texto chamado 'arquivo.txt' com o conteúdo "Olá Reprograma"
e exibe as mensagens "Inicio" e "Fim" no console para indicar o início e o término da execução do programa.*/




/* Codigo sem comentario (porem comentado. Para rodar tem que comentar um, ta bem?) */

// const fs = require('fs')

// console.log("Inicio")

// fs.writeFileSync('arquivo.txt', 'Olá Reprograma')

// console.log('Fim')