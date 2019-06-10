const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7766c87e4c4d6410f8232a224073477d/'+ latitude + ',' + longitude + '?units=us'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback(error, undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } 
        else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast