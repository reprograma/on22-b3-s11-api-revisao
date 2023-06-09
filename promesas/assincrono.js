/*Importamos o módulo 'fs', que é uma biblioteca do Node.js que nos permite trabalhar com operações de arquivo.*/
const fs = require('fs')

console.log("Inicio") //Mandamos uma mensagem "Inicio" pro console, tipo "E aí, galera!".

/* Chamamos a função fs.writeFile para criar um arquivo chamado 'arquivo.txt' e escrever nele o conteúdo
"Olá Reprograma" de forma assíncrona. Essa função recebe três argumentos: o primeiro é o nome do arquivo
que queremos criar ou modificar ('arquivo.txt' no caso), o segundo é o conteúdo que desejamos escrever
no arquivo ("Olá Reprograma" no caso) e o terceiro é uma função de callback que será executada quando
a operação de escrita for concluída.*/
fs.writeFile('arquivo.txt', 'Olá Reprograma', function(err){

    /* Utilizamos a função setTimeout para criar um atraso de 7 segundo antes de executar o código dentro da função
    de callback. Isso significa que o próximo trecho de código será executado após esse atraso.*/
    setTimeout(function(){
        console.log('O Arquivo foi criado')// Após o atraso de 7 segundo, exibimos a mensagem "O Arquivo foi criado" no console.

    }, 7000);
})
console.log('Fim')  //Mandamos outra mensagem pro console, tipo "Valeu, pessoal! Acabou aqui!".

/* Em resumo, o código cria um arquivo de texto de forma assíncrona, aguarda 7 segundo e exibe mensagens no console indicando
o início, a criação do arquivo e o fim do programa.*/


/* Codigo sem comentario (porem comentado. Para rodar tem que comentar um, ta bem?) */

// const fs = require('fs')

// console.log("Inicio")

// fs.writeFile('arquivo.txt', 'Olá Reprograma', function(err){
//     setTimeout(function(){
//         console.log('O Arquivo foi criado')

//     }, 7000);
// })
// console.log('Fim')