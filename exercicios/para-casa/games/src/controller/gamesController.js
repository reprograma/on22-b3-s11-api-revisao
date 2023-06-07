const games = require("../models/games.json")


const getAllGames = (req, res) => {
    try {
    res.status(200).json([{
        'games list' : games
    }])

} catch (error) {
    res.status(404).send([{
        message : 'Games list not found'
    }])
}
}


const getGameById = (req, res) => {
    const idRequest = req.params.id
    const findGame = games.find(game => game.id == idRequest)
    try {
        res.status(200).send([{
            game: findGame
        }])
    } catch (error) {
        res.status(404).send([{
            message: 'Game not found'
        }])
    }
}


const addGame = (req, res) => {
    try {
        let titleRequest = req.body.title 
        let launchYearRequest = req.body.launchYear
        let consoleRequest = req.body.consoles
        let likedRequest = req.body.liked
        
        let newGame = {
            id: (games.length +1),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consoleRequest,
            liked: likedRequest
        };
        games.push(newGame)
        res.status(200).json([{
            message: 'New game successfully registered!',
            newGame
        }])

    } catch (error) {
        res.status(500).send([{
            message: 'Error, unable to register the game'
        }])
        
    }
}



const updateGame = (req, res) => {
    const idRequest = req.params.id 
    const updRequest = req.body 
    const updGame = games.findIndex(game => game.id == idRequest)

    try {
        games.splice(updGame,1,updRequest)
        res.status(200).send([{
            message: 'Game updated successfully',
            updRequest, games
        }])
    } catch (error) {
        res.status(500).send([{
            message: 'Error when updating game'
        }])
    }

}


const deleteGame = (req, res) => {
    const idRequest = req.params.id 
    const indiceGame = games.findIndex((game) => game.id == idRequest)

    games.splice(indiceGame, 1)

    try {
        res.status(200).json([{
            message: 'The game has been deleted!',
            'Deleted Game': idRequest,
            games
        }])
    } catch (error) {
        res.status(500).send([{
            message: 'Unable to delete game'
        }])
    }
}


const attGame = (req, res) => {
    const idRequest = req.params.id 
    const likedGame = req.body.liked 
    likedfind = games.find((game) => game == idRequest)
    likedfind.liked = likedGame
    
    try {
        res.status(200).json([{
            message: 'Game added as favorite'
        }])
    } catch (error) {
        res.status(404).json([{
            message: 'Could not add to favorites'
        }])
    }
}




module.exports = {
    getAllGames,
    getGameById,
    addGame,
    updateGame,
    deleteGame,
    attGame

}


