const express = require('express');
const router = express.Router();
const infoController = require('../controllers/controller');

router.get('/', infoController.get_data);
router.post('/', infoController.post_data);
router.put('/edit', infoController.edit_data);
router.delete('/delete/:id', infoController.delete_data);

module.exports = router;