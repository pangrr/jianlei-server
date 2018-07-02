const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  address: String,
  price: Number,
  description: String,
  images: [String]
});

module.exports = mongoose.model('Realestate', RealestateSchema);
