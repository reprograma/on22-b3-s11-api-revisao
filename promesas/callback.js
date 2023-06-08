/* Definimos uma função chamada enviarEmail que simula o envio de um email e possui um atraso de 2 segundos.*/
function enviarEmail(corpo, para, callback){
    setTimeout(function(){
        console.log(`
        Para: ${para}
        ---------------------------------------
        ${corpo}
        ---------------------------------------
        De: Camila Ribeiro
        `)
        callback();
    }, 2000)
}


console.log("Inicio do envio de email") //Exibimos a mensagem "Inicio do envio de email" no console.
enviarEmail("Olá Seja bem vindxs a Reprograma", "camilarp.rec@gmail.com", ()=>{ //Chamamos a função enviarEmail, passando o corpo do email, o destinatário e uma função de callback anônima como argumentos.
    console.log("Oii, isso é um callback") //Dentro da função de callback, exibimos as informações formatadas do email no console. 
    console.log("Ele acabou de ser executado!")//Chamamos a função de callback para indicar que o envio do email foi concluído. 

})
console.log("Aguarde o seu email foi enviado e vai chegar em minutos!") //Após um atraso de 2 segundos, é exibida a mensagem "Aguarde o seu email foi enviado e vai chegar em minutos!" no console.
    console.log("Deu certo!") //Por fim, exibimos a mensagem "Deu certo!" no console.

/* Em resumo, o código simula o envio de um email com um atraso de 2 segundos. Ele exibe mensagens no console indicando o início do envio, o corpo e o destinatário do email, além de uma mensagem de
confirmação. Utiliza uma função de callback para executar código adicional após o envio do email.*/