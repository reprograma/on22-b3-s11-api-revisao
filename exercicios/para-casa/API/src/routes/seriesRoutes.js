// IMPORTS
const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

// ROUTES
router
  .route('/series')
  .post(seriesController.postSeries)      // 1
  .get(seriesController.getAllseries);    // 2
router
  .route('/series/genre')
  .get(seriesController.getSeriesByGenre);// 3
router
  .route('/series/:id')
  .get(seriesController.getSeriesByID)    // 4
  .put(seriesController.updateSeries)     // 5
  .delete(seriesController.deleteSeries); // 6
router
  .route('/series/:id/liked')
  .patch(seriesController.patchLike);     // 7

// EXPORTS
module.exports = router;
