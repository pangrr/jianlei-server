const express = require('express');
const router = express.Router();
const CustomerRequest = require('../models/CustomerRequest.js');

// get all customer requests
router.get('/', (req, res, next) => {
  CustomerRequest.find((err, customerRequests) => {
    if (err) return next(err);
    res.json(customerRequests);
  });
});

// create a customer request
router.post('/', (req, res, next) => {
  CustomerRequest.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

// update a customer request by id
router.put('/:id', (req, res, next) => {
  CustomerRequest.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});


// delete a customer request by id
router.delete('/:id', (req, res, next) => {
  CustomerRequest.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
