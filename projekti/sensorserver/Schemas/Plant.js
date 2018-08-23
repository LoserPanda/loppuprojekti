const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Plant = new Schema({
    name: String,
    latinName: String,
    nickname: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    thresholdValues: {
        minLight: Number,
        maxLight: Number,
        minHumidity: Number,
        maxHumidity: Number,
        minTemperature: Number,
        maxTemperature: Number,
        minSoilMoisture: Number,
        maxSoilMoisture: Number
    },
    user_id: String,
    sensor_id: String
}, {
    collection: 'plants'
});

module.exports = mongoose.model('Plant', Plant);