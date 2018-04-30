const Realestate = require('../models/realestate.model');


exports.getRealestate = async (id) => {  
  try {
    let realestateFound = await Realestate.findById(id);
    if (!realestateFound) {
      throw Error(`cannot find realestate id=${id}`);
    }
    return realestateFound;
  } catch (e) {
    throw Error(e);
  }
};

exports.createRealestate = async (realestate) => {
  const newRealestate = new Realestate(realestate);
  try {
    let realestateCreated = await newRealestate.save();
    return realestateCreated;
  } catch(e) {      
    throw Error(e);
  }
};

exports.updateRealestate = async (realestate) => {
  try {
    let realestateUpdated = await Realestate.findOneAndUpdate({ _id: realestate._id }, realestate);
    if (!realestateUpdated) {
      throw Error(`cannot find realestate id=${realestate._id}`);
    }
    return realestateUpdated;
  } catch(e) {
    throw Error(e);
  }
};

exports.deleteRealestate = async (id) => {    
  try {
    let realestateDeleted = await Realestate.findByIdAndRemove(id);
    if (!realestateDeleted) {
      throw Error(`cannot find realestate id=${id}`);
    }
    return realestateDeleted;
  } catch(e) {
    throw Error(e);
  }
};