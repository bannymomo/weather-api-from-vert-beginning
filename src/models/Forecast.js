function forecastData(rawdata) {
  const ForecastDataArray = [];
  for (let i = 0; i < rawdata.length; i++) {
    const forecastData = {
      minCelsius: calculateCelsius(rawdata[i].main.temp_min),
      maxCelsius: calculateCelsius(rawdata[i].main.temp_max),
      minFahrenheit: calculateFahrenheit(rawdata[i].main.temp_min),
      maxFahrenheit: calculateFahrenheit(rawdata[i].main.temp_max),
      humidity: rawdata[i].main.humidity,
      windSpeed: rawdata[i].wind.speed,
      windDirection: calculateWindDirection(rawdata[i].wind.deg),
      time: rawdata[i].dt
    };
    ForecastDataArray.push(forecastData);
  }
  return ForecastDataArray;
}

module.exports = forecastData;

function calculateWindDirection(degree) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const value = Math.floor((degree + 22.5) / 45);
  return directions[value % 8];
}

function calculateCelsius(Kelvin) {
  const celsius = Kelvin - 273.15;
  // return Number.parseFloat(fahrenheit.toFixed(2));
  return Math.round(celsius * 1e2) / 1e2;
}
function calculateFahrenheit(Kelvin) {
  const Fahrenheit = ((Kelvin - 273.15) * 9) / 5 + 32;
  // return Number.parseFloat(fahrenheit.toFixed(2));
  return Math.round(Fahrenheit * 1e2) / 1e2;
}
