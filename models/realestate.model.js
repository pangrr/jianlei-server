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

const Realestate = mongoose.model('Realestate', RealestateSchema);
module.exports = Realestate;