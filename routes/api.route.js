const express = require('express');
const router = express.Router()
const realestateRoute = require('./api/realestate.route');

router.use('/realestate', realestateRoute);

module.exports = router;
