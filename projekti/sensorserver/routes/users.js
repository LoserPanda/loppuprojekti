var express = require('express');
var router = express.Router();
var db = require('../configurations/db');
/*
const Sensor = require('../Schemas/Sensor');
const Plant = require('../Schemas/Plant');
const ToDo = require('../Schemas/ToDo');
const User = require('../Schemas/User');
*/

const io = require('socket.io-client');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "176.34.158.245",
  user: "planttis",
  password: "nakki1234nakki",
  database: "sensortest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MARIADB IS JEBUUUUUUUUConnected!");
});



//Establish websocket to orangepi host server. as a client
var socket = io.connect("http://192.168.35.68:3000/", {
    reconnection: true
});

//TODO DB Bind to Aws EC2 opensuse Mariadb
socket.on('connect', function () {
    console.log('connected to lan network port:3000');
    socket.on('serialdata', function (data) {
	    console.log(data);

	    //TEE DATAN KÄSITTELY

	    //Test insert with hard coded values
	    con.query("INSERT INTO sensor (id, light, humidity, temp, moisture) VALUES (0, 80, 55.5, 30, 30)", (err)=>{
	    	if(err) throw err;
	    	console.log("Data send happily to MariaDb");
	    } );


    });
});



/* GET users listing. */
router.get('/', function (req, res, next) {
console.log("pööö");		

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
