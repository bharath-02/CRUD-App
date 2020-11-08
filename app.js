var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Doc = require('./Docs.model');
var User = require('./User.model');

mongoose.connect('mongodb://localhost:27017/newDB', (err) => {
    if (err) {
        console.log('Error Occured');
    } else {
        console.log('Server connected to mongoDB');
    }
});

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`);
});

app.listen(3500, () => {
    console.log('Listening on port: 3500');
})