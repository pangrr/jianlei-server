const express = require('express');
const router = express.Router();
const controller = require('../../controllers/realestate.controller');

router.get('/:id', controller.getRealestate);
router.post('/', controller.createRealestate);
router.put('/', controller.updateRealestate);
router.delete('/:id',controller.deleteRealestate);
router.post('/images', controller.uploadImages);

module.exports = router;
