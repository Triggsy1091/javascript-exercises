const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  fahreheit = (celsius * (9 / 5) + 32);
  fahreheit = Math.round(fahreheit * 10) / 10;
  return fahreheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
