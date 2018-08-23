const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    username: String
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);