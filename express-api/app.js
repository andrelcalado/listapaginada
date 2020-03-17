var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require ('cors');

var favoritados = require('./routes/favoritados');
var oruloConnection = require('./routes/oruloConnection');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}

app.use(cors());
app.use('/dados/favoritados', favoritados);
app.use('/orulo', oruloConnection);
app.use(allowCrossDomain);

module.exports = app;
