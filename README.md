<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

<h1 align="center"> Revisão + Exercícios: GET + POST + PUT + PATCH + DELETE </h1>

Turma Online 22 - B3 | Back-end | Semana 11 | 2023 | Professora Camila Ribeiro

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

# Introdução
Olá! Estamos nos aproximando de mais um período de revisão. Como o tempo passa rápido, não é mesmo?

Nesse momento, é importante reforçar e validar o conteúdo que já aprendemos até o momento do nosso curso. Para isso, vamos embarcar em um projeto que será desenvolvido por vocês (sim, novamente!).

Mas por onde começamos? Antes de mergulharmos de cabeça no projeto, vamos relembrar um pouco do que já vimos até aqui. Não se preocupe em decorar todas as sintaxes e códigos existentes no vasto mundo da programação. Isso virá naturalmente com o tempo. Então, respire fundo, relaxe e vamos relembrar juntos!

### Resumo
O que veremos na aula de hoje?


- [Introdução](#introdução)
    - [Resumo](#resumo)
  - [Métodos HTTP e o CRUD](#métodos-http-e-o-crud)
    - [HTTP](#http)
      - [HTTP Status Code](#http-status-code)
    - [CRUD](#crud)
  - [API](#api)
    - [Conceitos básicos de API](#conceitos-básicos-de-api)
      - [Importância e aplicabilidade das APIs](#importância-e-aplicabilidade-das-apis)
    - [API REST x API RESTFUL](#api-rest-x-api-restful)
      - [Conceitos API REST](#conceitos-api-rest)
      - [Conceitos API RESTFUL](#conceitos-api-restful)
      - [Organizando a API](#organizando-a-api)
        - [Recursos](#recursos)
        - [Identificadores](#identificadores)
        - [JSON OU SCHEMA](#json-ou-schema)
    - [Parâmetros de Requisição](#parâmetros-de-requisição)
      - [Tipos de Parâmetros](#tipos-de-parâmetros)
        - [request.query](#requestquery)
        - [request.params](#requestparams)
        - [request.body](#requestbody)
    - [ARQUITETURA MVC](#arquitetura-mvc)
    - [Padrão MVC](#padrão-mvc)
      - [Arquitetura MVC](#arquitetura-mvc-1)
  - [NodeJS](#nodejs)
      - [Apresentando o NodeJS](#apresentando-o-nodejs)
      - [Entendendo o que é o NPM](#entendendo-o-que-é-o-npm)
      - [Express](#express)
      - [Nodemon](#nodemon)
    - [Promise](#promise)
      - [Async/Await](#asyncawait)
      - [Try e catch](#try-e-catch)
  - [Métodos em find, findIndex e filter](#métodos-em-find-findindex-e-filter)
  - [Postman](#postman)
    - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Links Úteis](#links-úteis)


<br>

## Métodos HTTP e o CRUD

Os métodos HTTP (Hypertext Transfer Protocol) e o CRUD (Create, Read, Update, Delete) estão relacionados ao desenvolvimento de aplicativos web e à manipulação de recursos através da comunicação entre clientes e servidores.

### HTTP 

o HTTP é o protocolo padrão usado para transferir dados pela World Wide Web. Ele define uma série de métodos ou verbos que descrevem a ação a ser realizada em um recurso específico. Os principais métodos HTTP são:

| Método |  Descrição|
| --------- | ----------- |
| `GET` | usado para recuperar ou ler um recurso. |
| `POST` | usado para criar um novo recurso. |
| `PUT` | usado para substituir completamente um recurso. |
| `PATCH` | usado para atualizar parcialmente um recurso. |
| `DELETE` | usado para excluir um recurso existente. |

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/223f7a1f-5dd5-4d47-9e66-225661745535" width="60%" height="50%"/>
</p>

#### HTTP Status Code
Os código de status nos permitem saber se a solicitação que fizemos ao servidor foi um sucesso ou uma falha ou algo intermediário.

Eles são divididos em 5 grupos:

| Status |  Descrição|
| --------- | ----------- |
| `1xx` | Informativo: O servidor não concluiu totalmente a solicitação, ainda está pensando e em fase de transição. |
| `2xx` | Bem-sucedido: O servidor concluiu a solicitação com sucesso. |
| `3xx` | Redirecionamentos: este bloqueio é para redirecionamentos, significa que você solicitou um endereço, mas foi enviado para outro lugar. |
| `4xx` | Erros do cliente: há algum erro da sua parte. |
| `5xx` | Erros do servidor: há algum erro no lado do servidor. |

> Para as maes de CATs [Clica aqui 🐱](https://http.cat/)

> Para as maes de DOGs [Clica aqui 🐶](https://httpstatusdogs.com)

### CRUD
O CRUD é um sigla usado para descrever as quatro principais operações básicas que podem ser realizadas em um sistema de gerenciamento de banco de dados ou em um aplicativo que lida com dados persistentes. Essas operações são:

| Sigla | Método | Descrição |
| --- | --- | --- |
| `C` | `Create (Criar)` | criação de um novo recurso ou registro. |
| `R` | `Read  (Ler)` | leitura ou recuperação de um recurso existente ou registro.|
| `U` | `Update (Atualizar)` |  atualização de um recurso existente ou registro.|
| `D` | `Delete (Excluir)` | exclusão de um recurso existente ou registro.|

A relação entre os métodos HTTP e o CRUD é que os métodos HTTP fornecem a estrutura para realizar as operações CRUD em um aplicativo web. Cada método HTTP corresponde a uma ação CRUD específica, permitindo a criação, leitura, atualização e exclusão de recursos em um sistema ou banco de dados.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/98c31d56-afce-4a1d-be6f-7cb18a106c4a" width="60%" height="50%"/>
</p>

***
## API

### Conceitos básicos de API 
API significa "Interface de Programação de Aplicações" e é uma maneira de diferentes sistemas de software se comunicarem. É como uma caixa de diálogo entre aplicativos, permitindo que eles compartilhem informações e funcionem juntos. As APIs facilitam a integração e a criação de novas funcionalidades sem precisar reinventar a roda.

#### Importância e aplicabilidade das APIs
As APIs são de extrema importância e têm ampla aplicabilidade na indústria de software. Elas permitem a integração de diferentes sistemas e aplicativos, possibilitando o compartilhamento de dados e funcionalidades entre eles. Isso impulsiona a inovação, aumenta a eficiência e a produtividade, facilita a criação de ecossistemas de desenvolvimento e promove a colaboração entre equipes e empresas. As APIs também são fundamentais para o desenvolvimento de aplicativos móveis, serviços em nuvem, integração de sistemas legados e criação de plataformas e ecossistemas de software.

### API REST x API RESTFUL

#### Conceitos API REST 
REST (Representational State Transfer) é um estilo arquitetural para o design de APIs. É baseado em um conjunto de princípios que definem como as solicitações e respostas devem ser feitas entre os sistemas. O REST utiliza os métodos padrão do protocolo HTTP, como GET, POST, PUT e DELETE, para realizar operações em recursos.

#### Conceitos API RESTFUL
Uma API é considerada RESTful quando segue os princípios do REST. Isso significa que ela utiliza os métodos HTTP corretos para cada tipo de operação (GET para recuperar informações, POST para criar novos recursos, PUT para atualizar recursos existentes e DELETE para remover recursos) e também utiliza corretamente os códigos de status HTTP para indicar o resultado de cada solicitação.

#### Organizando a API

##### Recursos
Na API temos uma coleção, por exemplo, em uma API como a da Steam teriamos uma coleção de jogos. Logo "Jogos" é um recurso nessa API.


##### Identificadores
Os recursos disponiveis em uma coleção são identificados pelo ID. No caso de jogos  ode ser o numero de serie. Com pessoas é o CPF e com livros é o ISNB.

##### JSON OU SCHEMA
O Json ou a Schema é a forma de apresentar os dados que estão em transito. Com o  chema as informações que estão indo ate o banco de dados. Aceta: boolean, numero, string, entre outros.

```
{
  "nome": "João",
  "idade": 30,
  "profissao": "engenheiro"
}
```

### Parâmetros de Requisição
Em uma API, os parâmetros de requisição são informações adicionais que podem ser enviadas juntamente com uma solicitação para uma API. Esses parâmetros fornecem dados extras para a API e podem ser usados para personalizar ou filtrar os resultados da solicitação.

#### Tipos de Parâmetros

##### request.query
NÃO faz parte do url e é passado no formato key=value. Esses parâmetros devem
ser definidos pela desenvolvedora da API.
Quando queremos criar filtros para fazer consultas na nossa aplicação, o ideal é
sempre usar o req.query. Quero filtrar por ano? Quero filtrar por cor? Por tipo? Por
diretor? Vamos usar a Query.
```
EX.: GET /musicas/findByArtista?artist=ladyGaga
```
##### request.params
São partes variáveis de um caminho de URI. Eles são tipicamente usados para apontar
para um recurso específico dentro de uma coleção. Um URL pode ter vários
parâmetros de caminho, cada um denotado com chaves { } OU dois pontos . Quando
quero filtrar/deletar/atualizar usando um identificador único (username, cpf, ID)
usamos o req.params;
```
EX.: GET /musicas/:id
```
##### request.body
É usado para enviar dados que serão cadastrados no banco, podem ser combinados
com query ou path params.
```
EX.: { "favorited": true}
```
***
### ARQUITETURA MVC
MVC é um padrão de arquitetura de software, separando sua aplicação em 3 camadas. A camada de interação do usuário(view), a camada de manipulação dos dados(model) e a camada de controle(controller) Já que estamos lidando com um projeto que tem somente backend, não lidaremos com as views, porém lidamos com as rotas(routes).

O MVC nada mais é que uma forma de organizar o nosso código. A separação de responsabilidades na arquitetura MVC traz os seguintes benefícios: a separação de responsabilidades traz benefícios como modularidade, reutilização de código, facilitação da manutenção, testabilidade e escalabilidade, tornando o desenvolvimento e a evolução do sistema mais eficientes e organizados.

### Padrão MVC

| Camada | Descrição |
| --- | --- |
| `View` | `Responsável pela apresentação da interface e coleta de inputs do usuário.` |
| `Controller` | `Coordena a interação entre a view e o model, tomando decisões e direcionando o fluxo do programa.` |
| `Model` | `Manipula os dados e contém a lógica de negócios da aplicação.` |
| `Routes` | `Mapeiam as URLs para as ações correspondentes nos controllers, determinando como as solicitações são tratadas.` |

#### Arquitetura MVC

```
 📁pasta-do-projeto
   |
   |--📁node_modules
   |
   |--📁 src
   |  |
   |  |--📁 controllers
   |  |--📁 models
   |  |--📁 routes
   |  |--📄 index.js
   | 
   |- 📄 server.js
   |- 📄 package.json
   |- 📄 README.md
```
***
## NodeJS

#### Apresentando o NodeJS
Como sabemos o Javascript é uma linguagem que foi criada para a internet, para facilitar a criação de sites dinâmicos e interativo, rodando apenas navegador.

Isso mudou com o desenvolvimento do Node.js, que é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador. Com ele, é possível criar praticamente qualquer tipo de aplicações web, desde servidores para sites estáticos e dinâmicos, até APIs e sistemas baseados em microserviços.

#### Entendendo o que é o NPM
O NPM (Node Package Manager) é uma ferramenta usada no desenvolvimento de software com Node.js. Ele ajuda a baixar e gerenciar bibliotecas de código que são úteis para o seu projeto. Com o NPM, você pode facilmente adicionar, atualizar ou remover essas bibliotecas. É uma maneira eficiente de tornar seu trabalho mais rápido e fácil.

#### Express
O Express.js é um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/19fd6872-0ae8-4bb5-9e68-1906a71e3627" width="60%" height="50%"/>
</p>

#### Nodemon
O nodemon é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js
reiniciando automaticamente o servidor. Ele fica monitorando a aplicação em Node, e assim que houver qualquer mudança no código, o servidor é reiniciado automaticamente

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/f3ecca93-a92d-4423-a4d0-d78cbee37886" width="60%" height="50%"/>
</p>

***
  
### Promise
A Promise realiza processamentos e tratamentos de eventos ou ações assíncronas. Esse objeto guarda um valor que pode estar disponível agora, no futuro ou nunca. Isso permite o tratamento de eventos ou ações que acontecem de forma assíncrona em casos de sucessos ou falhas.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/be57543f-fe22-4594-9d3d-81ec798d6b95" width="60%" height="50%"/>
</p>

Ao criar uma Promise, a mesma começa em estado inicial como pendente (pending). Se ela estiver no estado de resolvida (resolved) é porque tudo deu certo, ou seja, a Promise foi criada e processada com sucesso, porém, em casos de falhas, a mesma estará no estado de rejeitada (rejected).
Uma das maneiras de fazer esse tratamento é através das funções then e catch, para sucesso ou falha respectivamente.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/424acba8-f685-41e3-912e-0e83370f8b5a" width="60%" height="50%"/>
</p>

#### Async/Await
Async/await simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código, e sair da bagunça que os Callbacks fazem no nosso código. Assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.
Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.
Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/bb85a5b6-14a8-4f04-9bcd-e12029fd033e" width="60%" height="50%"/>
</p>

#### Try e catch
O try e catch são usados para tratar erros assíncronos no JavaScript. O try envolve o código assíncrono e o catch captura qualquer erro ocorrido, permitindo tratá-lo de forma controlada. Isso é útil para lidar com exceções em operações demoradas, como chamadas de API.

```
try {
  const result = 10 / 0; // Tentativa de dividir por zero
  console.log(result);
} catch (error) {
  console.log('Ocorreu um erro:', error);
}
```
Nesse exemplo, o bloco de código dentro do try tenta realizar uma operação de divisão por zero, o que resulta em um erro. O catch captura esse erro e exibe uma mensagem de erro no console. Dessa forma, o programa não será interrompido abruptamente e você poderá tratar o erro de maneira adequada.
***
## Métodos em find, findIndex e filter

Os métodos find, findIndex e filter são fundamentais para a manipulação de arrays em JavaScript.

| Método |  Descrição|
| --------- | ----------- |
| `find` | é usado para encontrar o primeiro elemento que satisfaz uma condição, retornando o valor encontrado ou undefined. |
| `findIndex` | retorna o índice do primeiro elemento que atende à condição, ou -1 se nenhum for encontrado. |
| `filter` | cria um novo array com os elementos que satisfazem a condição especificada. |

***
## Postman

O Postman é uma ferramenta que dá suporte à documentação das requisições feitas pela API. Ele possui ambiente para a documentação, execução de testes de APIs e requisições em geral.

<p align="center">
<img src= "https://github.com/camisarp/Tres-Patas/assets/84551213/1f2a51b2-4ca4-4885-8bd0-0b1ff4c560fd" width="60%" height="50%"/>
</p>

***

### Exercícios 
* [Exercicio para sala](https://github.com/reprograma/on22-b3-s11-api-revisao/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/reprograma/on22-b3-s11-api-revisao/tree/main/exercicios/para-casa)


***
### Material da aula 

### Links Úteis
- [O que é SSL / TLS e HTTPS?](https://www.hostinger.com.br/tutoriais/o-que-e-ssl-tls-https)
- [Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
- [Entendendo Promises de uma vez por todas](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
- [NodeJs — Async/Await](https://medium.com/balta-io/nodejs-async-await-21ca3636252a)
- [Criando uma API Node em 10 passos com Express.js](https://medium.com/xp-inc/criando-uma-api-node-em-10-passos-com-express-js-52b2d612a8a9)
- [Como organizar e estruturar projetos com node.js](https://medium.com/@stroklabs/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)
- [Trabalhando com JSON](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)
- [Introdução ao JSON](https://www.json.org/json-pt)
- [O que É npm? Introdução Básica para Iniciantes](https://www.hostinger.com.br/tutoriais/o-que-e-npm)
- [Como converter os dados de uma requisição com o body-parser](https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisi%C3%A7%C3%A3o-com-o-body-parser-2b5b93100f00)
- [Introdução ao gerenciamento de rotas no Node.js com JavaScript](https://learn.microsoft.com/pt-br/training/modules/node-web-routes/)

<br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/84551213/181837816-99598bea-75fc-4ce9-893e-f90383f972d7.png" width="200px;" alt="Foto de Perfil de Camila Ribeiro"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/camila-ribeiro-pinto/" target="_blank"><img src="https://img.shields.io/badge/-Camila_Ribeiro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/camila-ribeiro-pinto/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>



