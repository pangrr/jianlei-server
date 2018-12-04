const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  coordinate: { longitude: Number, latitude: Number },
  price: Number,
  redpocket: { amount: Number, startDate: String, endDate: String },
  groupPrice: Number,
  phone: String,
  consultant: { phone: String, description: String },
  descriptionImage: String,
  images: [String],
  visitServices: { taxi: String, reimburse: String },
  comments: [{ account: String, text: String, date: String }],
  relatedRealestateIds: [String],
  news: [{ title: String, url: String }]
});


module.exports = mongoose.model('Realestate', RealestateSchema);
