// IMPORTS
const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

// ROUTES
router
  .route('/series')
//  .post(seriesController.postSeries)
  .get(seriesController.getAllSeries);
router
//  .route('/series/:id')
//  .get(seriesController.getSeriesByID)
//  .delete(seriesController.deleteSeries);
//router.route('/series/:id/liked').patch(seriesController.patchLike);
//router.route('/series/:id/genre').get(seriesController.getSeriesGenre);

// EXPORTS
module.exports = router;
