const RealestateService = require('../services/realestate.service');


exports.getRealestate = async (req, res) => {
  try {
    let realestateFound = await RealestateService.getRealestate(req.params.id);
    return res.status(200).json(realestateFound);
  } catch (e) {    
    return res.status(400).json({message: e.message});
  }
}

exports.createRealestate = async (req, res) => {
  let realestate = req.body;
  try {
    let realestateSaved = await RealestateService.createRealestate(realestate);
    return res.status(201).json(realestateSaved);
  } catch(e) {      
    return res.status(400).json({message: e.message});
  }
}

exports.updateRealestate = async (req, res) => {
  if (!req.body._id) {
    return res.status(400).json({message: '_id is required'});
  }
  try {
    let realestateUpdated = await RealestateService.updateRealestate(req.body);
    return res.status(200).json(realestateUpdated);
  } catch (e) {
    return res.status(400).json({message: e.message});
  }
}

exports.deleteRealestate = async (req, res) => {
    let id = req.params.id;
    try {
      let realestateDeleted = await RealestateService.deleteRealestate(id)
      return res.status(204).json(realestateDeleted);
    } catch (e) {
        return res.status(400).json({message: e.message});
    }
}
