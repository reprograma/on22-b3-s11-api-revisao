// IMPORTS
const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// ROUTES
router
  .route('/games')
//  .post(gamesController.postGame)
  .get(gamesController.getAllGames);
router
  .route('/games/:id')
//  .get(gamesController.getGameByID)
//  .put(gamesController.updateGame)
//  .delete(gamesController.deleteGame);
//router.route('/games/:id/liked').patch(gamesController.patchLike);

// EXPORTS
module.exports = router;