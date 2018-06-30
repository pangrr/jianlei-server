const mongoose = require('mongoose');

const RealestateSchema = new mongoose.Schema({
  name: String,
  alias: String,
  location: String,
  price: Number,
  customerComments: [{ customer: String, comment: String }],
  description: String,
  imageUrls: [String],
  relatedRealestates: [Number],
  developer: String,
  investor: String,
  propertyManagementCompany: String
});

module.exports = mongoose.model('Realestate', RealestateSchema);
