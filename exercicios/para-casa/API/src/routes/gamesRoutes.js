// IMPORTS
const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

// ROUTES
router
  .route('/games')
  .post(gamesController.postGame)         // 1
  .get(gamesController.getAllGames);      // 2
router
  .route('/games/:id')
  .get(gamesController.getGameByID)       // 3
  .put(gamesController.updateGame)        // 4
  .delete(gamesController.deleteGame);    // 5
 router.route('/games/:id/liked')
  .patch(gamesController.patchLike);      // 6

// EXPORTS
module.exports = router;