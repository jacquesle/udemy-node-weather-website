const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFjcXVlc2xlIiwiYSI6ImNqd2s3amd2ejBobTUzenA2b2MzcTRnaGEifQ.B3RKMoTWq7NdEi7C-UhlIg&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length < 1) {
            callback('No search results for that location. Try another search.', undefined)
        } else if (body.message) {
            callback('Error: ' + response.body.message, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode