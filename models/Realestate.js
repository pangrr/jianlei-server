const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  address: String,
  coordinate: { longitude: Number, latitude: Number },
  price: Number,
  redpocket: { amount: Number, startDate: String, endDate: String },
  groupPrice: Number,
  phone: Number,
  consultant: { phone: Number, description: String },
  description: String,
  images: [String],
  visitServices: { taxi: String, reimburse: String },
  comments: [{ account: String, text: String, date: String }],
  relatedRealestateIds: [String]
});


module.exports = mongoose.model('Realestate', RealestateSchema);
