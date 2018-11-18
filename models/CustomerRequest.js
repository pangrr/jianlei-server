const mongoose = require('mongoose');

const CustomerRequestSchema = new mongoose.Schema({
  customerName: String,
  customerPhone: Number,
  request: String,
  realestateId: String,
  realestateName: String
});


module.exports = mongoose.model('CustomerRequest', CustomerRequestSchema);
