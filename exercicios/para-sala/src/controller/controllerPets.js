const pets = require("../models/pets.json")
const fs = require("fs")

const createPet = (req, res) => {
    const {
        id,
        nomeFantasia,
        endereco,
        telefone,
        atende
    } = req.body
    pets.push({
        id: (pets.length + 1),
        nomeFantasia,
        endereco,
        telefone,
        atende
    })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { // gravando novo pet no array de pets
        if (err) {
            res.status(500).send({
                message: err
            })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) // recupero o pet que foi criado no array de pets
            res.status(200).send(petFound)
        }
    })
}

const deletePet = (req, res) => {
    try {
        const petId = req.params.id
        const petFound = pets.find(pet => pet.id == petId) // encontro o pet pelo id
        const petIndex = pets.indexOf(petFound) // identifico o índice do pet no meu array

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            pets.splice(petIndex, 1) // removo o pet pelo índice
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    8
                    console.log("Pet deletado com sucesso do arquivo!")
                    res.sendStatus(204)
                }
            })
        } else {
            res.status(404).send({
                message: "Pet não encontrado para ser deletado"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Erro ao deletar o pet"
        })
    }
}

const updatePet = (req, res) => {
    try {
        const petId = req.params
        const petToUpdate = req.body //Pego o corpo da requisição com as alterações

        const petFound = pets.find(pet => pet.id == null); // separo o pet que irei atualizar
        const petIndex = pets.indexOf(petFound) // separo o indice do pet no array de pets

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            pets.splice(petIndex, 1, petToUpdate) // atualizando o array de pets com os novos dados

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petUpdated = pets.find(pet => pet.id == petId) // separo o pet que modifiquei no array
                    res.status(200).send(petUpdated) // envio o pet modificado como resposta
                }
            })
        } else {
            res.status(404).send({
                message: "Pet não encontrado para ser atualizado"
            })
        }

    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

const updateName = (req, res) => {
    try {
        const petId = req.params.id
        //        const nomeFantasia = req.body.nomeFantasia
        const petFound = pets.find(pet => pet.id == petId) // encontrando o pet
        const petIndex = pets.inde(petFound) // identifico o índice do pet no meu array

        if (petIndex >= 0) { // verifico se o pet existe no array de pets
            //  petFound.nomeFantasia = nomeFantasia //atualizamos o objeto com o novo nome
            pets.splice(petIndex, 1, petFound) // atualizando o array de pets com o pet atualizado

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({
                        message: err
                    })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petpdated = pets.find(pet => pet.id == petId) // separo o pet que modifiquei no array
                    res.status(200).send(petpdated) // envio o pet modificado como resposta
                }
            })
        } else {
            res.status(404).send({
                message: "Pet não encontrado para modificar o nome."
            })
        }

    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

//puxar todos os pets filtrando ou nao
const getAllPets = (req, res) => {
    const animal = req.query.animal // puxamos a informação de animal da nossa query string
    const estado = req.query.estado.toLowerCase() // puxamos a informação de estado da nossa query string

    let allPets = pets
    if (animal) { // se eu tiver passado a query string com o animal na hora de fazer a request...
        allPets = pets.filter(pet => pet.atende.includes(animal)) // encontro todos os pets que atende o animal
    }
    if (estado) {
        const petByEstado = pets.filter(pet => pet.endereco.toLowerCase().includes(estado)) // encontro todos os pets que possuem o estado no endereco
        if (animal) { // o filtro de animal foi informado?
            allPets = petByEstado.filter(pet => allPets.includes(pet)) // encontro a interseção dos pets filtrados por animal e endereco
        } else {
            allPets = petByEstado
        }
    }
    res.status(200).send(allPets) // retorna todos os pets filtrados ou nao
}

const getPet = (req, res) => {

    try {
        const petId = req.params.id
        const petFound = pets.find(pet => pet.id == petId)
        if (petFound) {
            res.status(200).send([{
                message: "Pet encontrado!",
                Pets: petFound
            }])
        } else {
            res.status(404).send({
                message: "Pet não encontrado"
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Erro no server"
        });
    }
};


const getPetByAtendende = (req, res) => {
    try {
    let atendeRequest = req.query.atende
    console.log(atendeRequest)

    let petFound = pets.filter(pet => pet.atende.includes(atendeRequest))

    //console.log(petFound)

    if (petFound.length > 0) {
        res.status(200).send([{
            message: "Pet encontrado!",
            Pets: petFound
        }])
    } else {
        res.status(404).send({
            message: "Nao encontramos estabelecimento que atenda seu bichinho"
        })
    }
} catch (err) {
    res.status(500).send({
        message: "Erro no server"
    });
}
};


module.exports = {
    createPet,
    deletePet,
    updateName,
    updatePet,
    getAllPets,
    getPet,
    getPetByAtendende
}


/*O código importa o arquivo JSON pets.json que contém os dados dos pets e o módulo fs para interagir com o sistema
de arquivos. Em seguida, o controlador exporta várias funções que são usadas como manipuladores de rota nas rotas
definidas anteriormente.

As funções incluem:

createPet: Responsável por criar um novo pet e adicioná-lo ao array de pets. Em seguida, atualiza o arquivo pets.json
com os dados atualizados e retorna o pet criado.

deletePet: Responsável por encontrar e remover um pet pelo ID fornecido. Em seguida, atualiza o arquivo pets.json
com os dados atualizados e retorna um código de status 204 em caso de sucesso.

updatePet: Responsável por encontrar e atualizar um pet pelo ID fornecido com os novos dados fornecidos.
Em seguida, atualiza o arquivo pets.json com os dados atualizados e retorna o pet atualizado.

updateName: Responsável por encontrar um pet pelo ID fornecido e atualizar apenas o nome do pet. Em seguida,
atualiza o arquivo pets.json com os dados atualizados e retorna o pet atualizado.

getAllPets: Responsável por retornar todos os pets. Ele pode filtrar os pets por animal e/ou estado, com base nos
parâmetros da query string na requisição.

getPet: Responsável por encontrar e retornar um pet específico com base no ID fornecido.

getPetByAtendende: Responsável por encontrar e retornar pets que são atendidos por um determinado atendente.

Essas funções manipulam os dados dos pets e atualizam o arquivo pets.json quando necessário, garantindo a
consistência dos dados e fornecendo as respostas apropriadas para as requisições.*/