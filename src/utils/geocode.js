const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiZ3N4cng3NTAiLCJhIjoiY2s3MjJnMDFxMDByMTNsbjBpbjU2MWV6aCJ9.q8X8lSHPvcdFVikBXiWOYA`;

  request({
    url,
    json: true,
  }, (error, { body }) => {

    if (error) {
      callback('Unable to connect to location service!', undefined);
    }
    else if (body.features.length === 0) {
      callback('Unable to find location. Try again with different search term', undefined)
    }
    else {
      const { center, place_name } = body.features[0];
      callback(undefined, { latitude: center[1], longitude: center[0], location: place_name });
    }
  })

};

module.exports = geocode;
