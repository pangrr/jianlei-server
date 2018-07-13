const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  address: String,
  price: Number,
  redpocket: { amount: Number, startDate: String, endDate: String },
  groupPrice: Number,
  phone: Number,
  consultant: { title: String, phone: Number, description: String },
  description: String,
  images: [String],
  visitServices: [{ name: String, description: String }],
  comments: [{ account: String, text: String, date: String }],
  relatedRealestateIds: [String]
});


module.exports = mongoose.model('Realestate', RealestateSchema);
