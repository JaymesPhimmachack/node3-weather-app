const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/b7de0ec0ea4bffa5fc41fb8f0d08ad54/${latitude},${longitude}`;

  request({
    url,
    json: true,
  }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    }
    else if (body.error) {
      callback('Unable to find location', undefined)
    }
    else {
      const { temperature, precipProbability, summary, visibility } = body.currently;
      callback(undefined, `The current condition is ${summary}. It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain. The visibility rating is ${visibility}`);
    }
  })
};

module.exports = forecast;
