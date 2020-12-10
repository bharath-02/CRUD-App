// Third Party Packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const infoRouter = require('./routes/router');

// Routes 
app.use('/info', infoRouter);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Connection to the Database
mongoose.connect('mongodb://localhost:27017/CRUD-db', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('Error Occured'.red.bold);
    } else {
        console.log('Server connected to mongoDB'.cyan.bold);
    }
});

// Listening to port
app.listen(3500, () => {
    console.log('Listening on port: 3500'.yellow.bold);
})