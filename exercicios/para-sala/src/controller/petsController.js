const pets = require("../models/pets.json")
const fs = require("fs")

const createPet = (request, response) => {
    const {
        id,
        nomeFantasia,
        endereco,
        telefone,
        atende
    } = request.body
    pets.push({
        id: (pets.length + 1),
        nomeFantasia,
        endereco,
        telefone,
        atende
    })

    fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) { 
        if (err) {
            response.status(500).send({
                message: err
            })
        } else {
            console.log("Arquivo atualizado com sucesso!")
            const petFound = pets.find(pet => pet.id == id) 
            response.status(200).send(petFound)
        }
    })
}

const deletePet = (request, response) => {
    try {
        const petId = request.params.id
        const petFound = pets.find(pet => pet.id == petId) 
        const petIndex = pets.indexOf(petFound) 

        if (petIndex >= 0) { 
            pets.splice(petIndex, 1) 
            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({
                        message: err
                    })
                } else {
                    8
                    console.log("Pet deletado com sucesso do arquivo!")
                    response.sendStatus(204)
                }
            })
        } else {
            response.status(404).send({
                message: "Pet não encontrado para ser deletado"
            })
        }

    } catch (err) {
        console.log(err)
        response.status(500).send({
            message: "Erro ao deletar o pet"
        })
    }
}

const updatePet = (request, response) => {
    try {
        const petId = request.params
        const petToUpdate = request.body 

        const petFound = pets.find(pet => pet.id == null); 
        const petIndex = pets.indexOf(petFound) 

        if (petIndex >= 0) { 
            pets.splice(petIndex, 1, petToUpdate) 

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({
                        message: err
                    })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petUpdated = pets.find(pet => pet.id == petId) 
                    response.status(200).send(petUpdated) 
                }
            })
        } else {
            response.status(404).send({
                message: "Pet não encontrado para ser atualizado"
            })
        }

    } catch (err) {
        response.status(500).send({
            message: err
        })
    }
}

const updateName = (request, response) => {
    try {
        const petId = request.params.id
        const petFound = pets.find(pet => pet.id == petId)  
        const petIndex = pets.inde(petFound) 

        if (petIndex >= 0) { 
            pets.splice(petIndex, 1, petFound) 

            fs.writeFile("./src/models/pets.json", JSON.stringify(pets), 'utf8', function (err) {
                if (err) {
                    response.status(500).send({
                        message: err
                    })
                } else {
                    console.log("Arquivo atualizado com sucesso!")
                    const petpdated = pets.find(pet => pet.id == petId) 
                    response.status(200).send(petpdated) 
                }
            })
        } else {
            response.status(404).send({
                message: "Pet não encontrado para modificar o nome."
            })
        }

    } catch (err) {
        response.status(500).send({
            message: err
        })
    }
}


const getAllPets = (request, response) => {
    const animal = request.query.animal 
    const estado = request.query.estado.toLowerCase() 

    let allPets = pets
    if (animal) { 
        allPets = pets.filter(pet => pet.atende.includes(animal)) 
    }
    if (estado) {
        const petByEstado = pets.filter(pet => pet.endereco.toLowerCase().includes(estado)) 
        if (animal) { 
            allPets = petByEstado.filter(pet => allPets.includes(pet)) 
        } else {
            allPets = petByEstado
        }
    }
    response.status(200).send(allPets) 
}

const getPet = (request, response) => {

    try {
        const petId = request.params.id
        const petFound = pets.find(pet => pet.id == petId)
        if (petFound) {
            response.status(200).send([{
                message: "Pet encontrado!",
                Pets: petFound
            }])
        } else {
            response.status(404).send({
                message: "Pet não encontrado"
            })
        }
    } catch (err) {
        response.status(500).send({
            message: "Erro no server"
        });
    }
};


const getPetByAtendende = (request, response) => {
    try {
    let atendeRequest = request.query.atende
    console.log(atendeRequest)

    let petFound = pets.filter(pet => pet.atende.includes(atendeRequest))


    if (petFound.length > 0) {
        response.status(200).send([{
            message: "Pet encontrado!",
            Pets: petFound
        }])
    } else {
        response.status(404).send({
            message: "Nao encontramos estabelecimento que atenda seu bichinho"
        })
    }
} catch (err) {
    response.status(500).send({
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


