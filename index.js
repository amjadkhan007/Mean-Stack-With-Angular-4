const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

var port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if(err) {
		console.log("Could not connect fo database " + err);
	} else {
		console.log(config.secret);
		console.log("Connected to DB: " + config.db);
	}
});

app.use(express.static(__dirname + '/client/dist'));

app.get('*', (req, res) =>{
  res.send(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () => {
	console.log("App Running on Port: " + port);
});