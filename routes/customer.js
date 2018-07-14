const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer.js');

// get all customers
router.get('/', (req, res, next) => {
  Customer.find((err, customers) => {
    if (err) return next(err);
    res.json(customers);
  });
});

// create a customer
router.post('/', (req, res, next) => {
  Customer.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
