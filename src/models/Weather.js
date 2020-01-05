const axios = require("axios");
const cityData = require("./City");
const currentData = require("./Current");
const forecastData = require("./Forecast");
const APPID = process.env.APPID;

function weatherDataLink(cc, city) {
  let promise1 = axios.get("http://api.openweathermap.org/data/2.5/weather?", {
    params: {
      q: `${city},${cc}`,
      APPID: `${APPID}`
    }
  });
  let promise2 = axios.get("http://api.openweathermap.org/data/2.5/forecast?", {
    params: {
      q: `${city},${cc}`,
      APPID: `${APPID}`
    }
  });
  return Promise.all([promise1, promise2]);
}

function getData(response, weatherType) {
  const current = response[0].data;
  const forecast = response[1].data;

  const CityData = cityData(forecast.city);
  const CurrentData = currentData(current);
  const ForecastData = forecastData(forecast.list);
  const FinalPostData = finaPostData(CityData, CurrentData, ForecastData);
  weatherTypeJudge(weatherType, FinalPostData);

  return FinalPostData;
}

module.exports = { weatherDataLink, getData };

function weatherTypeJudge(weatherType, FinalPostData) {
  if (weatherType === "current") {
    delete FinalPostData.forecast;
  }

  if (weatherType === "forecast") {
    delete FinalPostData.current;
  }
}

function finaPostData(cityData, currentData, forecastData) {
  const finalPostData = {
    city: cityData,
    current: currentData,
    forecast: forecastData
  };
  return finalPostData;
}
