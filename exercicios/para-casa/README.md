# Exercício de Casa 🏠 

## Games

- Explicação do exercício: Que tal controlarmos nossos jogos e as fases
que já conseguimos passar?

| Método |  Descrição|
| --------- | ----------- |
| `GET` | /games - Retorna todos os jogos |
| `GET` | /games/:id - Retornar apenas um jogo específico |
| `POST` | /games - Cadastrar novo jogo |
| `PUT` | /games/:id - Atualizar um jogo específico |
| `DELETE` | /games/:id - Deletar um jogo específico |
| `PATCH` | /games/:id/liked - Atualizar se gostou ou não do jogo. |

## Series

- Nessa api queremos poder cadastrar séries, cada uma com inúmeras temporadas e cada
temporada com uma lista deepisódios.

| Método |  Descrição|
| --------- | ----------- |
| `GET` | /series - Retorna todas series|
| `GET` | /series/genero - Retornar series de um genero específico|
| `GET` | /series/:id - Retornar apenas uma série específico |
| `POST` | /series - Cadastrar nova série |
| `DELETE` | /series/:id - Deletar uma série específica |
| `PATCH` | /series/:id/liked - Atualizar se gostou ou não da série.
 |

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Resolvi o exercício.
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [x] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).
