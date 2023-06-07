// IMPORTS
const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

// ROUTES
router
  .route('/series')
  .post(seriesController.postSeries)      // 1
  .get(seriesController.getAllSeries);    // 2
router
.route('/series/:id')
  .get(seriesController.getSeriesByID)    // 3
  .delete(seriesController.deleteSeries); // 4
router.route('/series/:id/liked')
 .patch(seriesController.patchLike);      // 5
router.route('/series/:id/genre')
//  .get(seriesController.getSeriesGenre);  // 6

// EXPORTS
module.exports = router;
