function currentData(rawdata) {
  const currentData = {
    minCelsius: calculateCelsius(rawdata.main.temp_min),
    maxCelsius: calculateCelsius(rawdata.main.temp_max),
    minFahrenheit: calculateFahrenheit(rawdata.main.temp_min),
    maxFahrenheit: calculateFahrenheit(rawdata.main.temp_max),
    humidity: rawdata.main.humidity,
    windSpeed: rawdata.wind.speed,
    windDirection: calculateWindDirection(rawdata.wind.deg)
  };
  return currentData;
}

module.exports = currentData;

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
