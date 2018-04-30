const express = require('express');
const router = express.Router();
const RealestateController = require('../../controllers/realestate.controller');

router.get('/:id', RealestateController.getRealestate);
router.post('/', RealestateController.createRealestate);
router.put('/', RealestateController.updateRealestate);
router.delete('/:id',RealestateController.deleteRealestate);

module.exports = router;
