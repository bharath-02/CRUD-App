// Third Party Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const infoRouter = require('./routes/router');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/info', infoRouter);

// Connection to the Database
mongoose.connect('mongodb://localhost:27017/CRUD-db', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, (err) => {
    if (err) {
        console.log('Error Occured'.red.bold);
    } else {
        console.log('Server connected to mongoDB'.cyan.bold);
    }
});

// Listening to port
app.listen(5100, () => {
    console.log('Listening on port: 5100'.yellow.bold);
})