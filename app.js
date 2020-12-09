const express = require('express');
const app = express();
const mongoose = require('mongoose');
const colors = require('colors');
const infoRouter = require('./routes/router');


mongoose.connect('mongodb://localhost:27017/CRUD-db', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('Error Occured'.red.bold);
    } else {
        console.log('Server connected to mongoDB'.cyan.bold);
    }
});

app.use('/info', infoRouter);

app.listen(3500, () => {
    console.log('Listening on port: 3500'.yellow.bold);
})