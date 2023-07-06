const series = require("../models/series.json");

const getAllSeries = (_, response) => {
  return response.status(200).json({
    data: series,
  });
};



module.exports = {
  getAllSeries, 
  
}