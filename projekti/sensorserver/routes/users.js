var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var db = require('../configurations/db');

const Sensor = require('../Schemas/Sensor');
const Plant = require('../Schemas/Plant');
const ToDo = require('../Schemas/ToDo');
const User = require('../Schemas/User');

mongoose.connect(db, {useNewUrlParser: true}).then(() => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    });

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).redirect("/");
        })
        .catch(err => {
            res.status(400).send('unable to save the user into database');
        });
});

router.get('/users', function (req, res) {
    User.find(req.params.username, function (err, data) {
        res.json(data);
    });
});

module.exports = router;
