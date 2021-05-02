const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d63593fbbde3fb0cb2589356f65a8c6d&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
     const errorMsg = response.body.error;
     const {weather_descriptions, temperature, feelslike} = response.body.current;
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (errorMsg) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${weather_descriptions} ${temperature} ${feelslike}`
      );
    }
  });
};

module.exports = forecast;
