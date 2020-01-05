const express = require("express");
const weather = require("../models/Weather");
const countryCheck = require("../middlewares/countryCheck");
const router = express.Router();
const resposeFormatter = require("../utils/responseFormatter");

router.get("/:cc/:city", countryCheck, function(req, res, next) {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .weatherDataLink(cc, city)
    .then(function(response) {
      const FinalPostData = weather.getData(response, weatherType);
      resposeFormatter(res, 200, null, FinalPostData);
    })
    .catch(function(error) {
      return next(error);
    });
});

module.exports = router;
