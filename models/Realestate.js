const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: { area: Number, exchange: Number, subscriber: Number },
  price: Number,
  groupPrice: Number,
  description: String,
  images: [String]
});

module.exports = mongoose.model('Realestate', RealestateSchema);
