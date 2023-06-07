// IMPORTS
const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// ROUTES
router
  .route('/games')
  .post(gamesController.postGame)           // 1
  .get(gamesController.getAllGames);        // 2
router
  .route('/games/console')
  .get(gamesController.getGameByConsole);   // 3
router
  .route('/games/:id')
  .get(gamesController.getGameByID)         // 4
  .put(gamesController.updateGame)          // 5
  .delete(gamesController.deleteGame);      // 6
router
  .route('/games/:id/liked')
  .patch(gamesController.patchLike);        // 7

// EXPORTS
module.exports = router;
