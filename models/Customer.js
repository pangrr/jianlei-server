const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  phone: Number,
  request: String,
  realestateId: String
});


module.exports = mongoose.model('Customer', CustomerSchema);
