var connection = require('./model');

var express = require('express');
var app = express();
var path = require('path');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var courseController = require('./controllers/course');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, "/views/"));

app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>')
    res.render('index', {});
});

app.use('/course', courseController);

app.listen('3300', () => {
    console.log('Server started');
});