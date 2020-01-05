function cityData(rawdata) {
  const cityData = {
    name: rawdata.name,
    coord: rawdata.coord,
    country: rawdata.country,
    population: rawdata.population
  };
  return cityData;
}

module.exports = cityData;
