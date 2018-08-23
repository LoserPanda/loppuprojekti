const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Sensor = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    light: Number,
    humidity: Number,
    temperature: Number,
    soilMoisture: Number,
    sensor_id: String
},{
    collection: 'sensors'
});

module.exports = mongoose.model('Sensor', Sensor);