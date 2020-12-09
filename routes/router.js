const express = require('express');
const router = express.Router();
const InfoRouter = require('../models/schema');

router.get('/', (req, res) => {
    res.json('Hello');
})

module.exports = router;