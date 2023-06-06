const gamesJson = require("../models/games.json");

const getAll = (req, res) => {
  try {
    res.status(200).json([
      {
        games: gamesJson,
      },
    ]);
  } catch (error) {
    res.status(500).json([
      {
        message: "Server error",
      },
    ]);
  }
};

const getById = (req, res) => {
  try {
    const idRequest = req.params.id;
    const games = gamesJson.find((game) => game.id == idRequest);

    res.status(200).send(games);
  } catch (error) {
    res.status(404).json([
      {
        message: "Not found",
      },
    ]);
  }
};

const addNewGame = (req, res) => {
  try {
    let titleRequest = req.body.title;
    let launchYearRequest = req.body.launchYear;
    let consolesRequest = req.body.consoles;
    let likedRequest = req.body.liked;

    let newGame = {
      id: Math.floor(Date.now * Math.random()).toString(20),
      title: titleRequest,
      launchYear: launchYearRequest,
      consoles: consolesRequest,
      liked: likedRequest,
    };

    gamesJson.push(newGame);
    res.status(200).json([
      {
        message: "Add new game!!!",
        newGame,
      },
    ]);
  } catch (error) {
    console.log(error);
    res.status(500).send([
      {
        message: "Internal error when registering",
      },
    ]);
  }
};

const updateById = (req, res) => {
  try {
    const idRequest = req.params.id;
    const gameRequest = req.body;
    const findGame = gamesJson.findIndex((game) => game.id == idRequest);
    gamesJson.splice(findGame, 1, gameRequest);

    res.status(200).json([
      {
        message: "Update Game!!",
        gamesJson,
      },
    ]);
  } catch (error) {
    res.status(404).json([
      {
        message: "Not Found, sorry.",
      },
    ]);
  }
};

const deleteGame = (req, res) => {
  try {
    const idRequest = req.params.id;
    const deleteGame = gamesJson.findIndex((game) => game.id == idRequest);
    gamesJson.slice(deleteGame, 1);

    res.status(200).json([
      {
        message: " Deleted Game!",
        delete: idRequest,
        gamesJson,
      },
    ]);
  } catch (error) {
    res.status(404).json([
      {
        message: "Delete not game",
      },
    ]);
  }
};

const likedGame = (req, res) => {
  try {
    const idRequest = req.params.id;
    const likedRequest = req.body.liked;
    const likedFind = gamesJson.find((game) => game.id == idRequest);
    likedFind.liked = likedRequest;

    res.status(200).json([
      {
        message: "Favorite game!!",
      },
    ]);
  } catch (error) {
    res.status(404).json([
      {
        message: "Not favorite game",
      },
    ]);
  }
};

module.exports = {
  getAll,
  getById,
  addNewGame,
  updateById,
  deleteGame,
  likedGame,
};
