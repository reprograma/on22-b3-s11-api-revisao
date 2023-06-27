async function obterDados() { //Definimos a função obterDados como assíncrona usando a palavra-chave async.
    return new Promise((resolve, reject) => {

        setTimeout(() => { //Dentro da função obterDados, retornamos uma Promise que simula uma operação assíncrona de obtenção de dados usando setTimeout.
            const sucesso = true; //Dentro do setTimeout, definimos uma variável sucesso como true.

            if (sucesso) {
                resolve("Dados obtidos com sucesso!"); //Se sucesso for verdadeiro, resolvemos a Promise usando resolve e passamos a mensagem "Dados obtidos com sucesso!".
            } else {
                reject("Erro ao obter os dados."); //Caso contrário, rejeitamos a Promise usando reject e passamos a mensagem "Erro ao obter os dados.".
            }
        }, 2000);
    });
}

async function exemplo() { //Definimos a função exemplo como assíncrona usando a palavra-chave async.
    try { //Dentro da função exemplo, usamos o bloco try-catch para lidar com erros.
        const resultado = await obterDados(); //No bloco try, usamos a palavra-chave await para aguardar a resolução da Promise retornada por obterDados.
        console.log(resultado); //Se a Promise for resolvida, o resultado é armazenado na variável resultado. Exibimos o resultado no console usando console.log(resultado).
    } catch (erro) { //Se a Promise for rejeitada, o erro é capturado pelo bloco catch.
        console.log(erro); //Exibimos o erro no console usando console.log(erro).
    }
}

exemplo(); //Chamamos a função exemplo para iniciar a execução assíncrona.

/* Em resumo, esse código define uma função obterDados que retorna uma Promise simulando uma operação assíncrona
de obtenção de dados. Se a operação for bem-sucedida, a Promise é resolvida com a mensagem "Dados obtidos com
sucesso!". Caso contrário, a Promise é rejeitada com a mensagem "Erro ao obter os dados.". A função exemplo utiliza
await para aguardar a resolução da Promise retornada por obterDados e trata os resultados ou erros usando os blocos
try-catch. Os resultados são exibidos no console quando a operação é bem-sucedida, e os erros são exibidos quando
ocorrem problemas.*/


//Abaixo cosigo que resulta a rejeição. Lembrar de comentar para não dar a mesma resposta.

// // //ERRO
// async function obterDados() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const sucesso = false;  //Dentro do setTimeout, definimos uma variável sucesso como false.

//             if (sucesso) {
//                 resolve("Dados obtidos com sucesso!");
//             } else {
//                 reject("Erro ao obter os dados.");
//             }
//         }, 2000);
//     });
// }

// async function exemplo() {
//     try {
//         const resultado = await obterDados();
//         console.log(resultado);
//     } catch (erro) {
//         console.log(erro);
//     }
// }

// exemplo();