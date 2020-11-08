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

app.post('/addUser', (req, res) => {
    console.log('Adding new user');
    var userObj = {
        "_id": new mongoose.Types.ObjectId(),
        "name": req.body.name
    };
    var newUser = new User(userObj);
    newUser.save((err, user) => {
        if (err) {
            res.status(400).send('There is an error while adding new user');
        } else {
            res.status(200).json(user);
        }
    });
});

app.post('/addDoc', (req, res) => {
    console.log('Adding new Doc');
    var docObj = {
        "_id": new mongoose.Types.ObjectId(),
        "title": req.body.title,
        "description": req.body.description,
        "user": "5fa79f235b765c2c881fc3a6"
    };
    var newObj = new Doc(docObj);
    newObj.save((err, user) => {
        if (err) {
            res.status(400).send('There is an error while adding new Doc');
        } else {
            res.status(200).json(user);
        }
    });
});

app.get('/users', (req, res) => {
    console.log('Getting all Users');
    User.find({}).populate('user').exec((err, users) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).json(users);
        }
    });
});

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`);
});

app.listen(3500, () => {
    console.log('Listening on port: 3500');
})