const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  request: String,
  realestateId: String,
  realestateName: String
});


module.exports = mongoose.model('Customer', CustomerSchema);
