const express = require('express');
const router = express.Router();
const InfoModel = require('../models/schema');
const infoController = require('../controllers/controller');

router.get('/', infoController.get_data);
router.post('/', infoController.post_data);
router.put('/edit', infoController.edit_data);

module.exports = router;