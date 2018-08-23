const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ToDo = new Schema({
    title: String,
    text: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    alarm: Date,
    status: {
        type: Boolean,
        default: false
    },
    plant_id: String
},{
    collection: 'todos'
});

module.exports = mongoose.model('ToDo', ToDo);