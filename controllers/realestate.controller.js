const service = require('../services/realestate.service');


exports.getRealestate = async (req, res) => {
  try {
    const realestateFound = await service.getRealestate(req.params.id);
    return res.status(200).json(realestateFound);
  } catch (e) {    
    return res.status(400).json({message: e.message});
  }
}

exports.createRealestate = async (req, res) => {
  const realestate = req.body;
  try {
    const realestateSaved = await service.createRealestate(realestate);
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
    const realestateUpdated = await service.updateRealestate(req.body);
    return res.status(200).json(realestateUpdated);
  } catch (e) {
    return res.status(400).json({message: e.message});
  }
}

exports.deleteRealestate = async (req, res) => {
  const id = req.params.id;
  try {
    const realestateDeleted = await service.deleteRealestate(id)
    return res.status(204).json(realestateDeleted);
  } catch (e) {
      return res.status(400).json({message: e.message});
  }
}

exports.uploadImage = async (req, res) => {
  try {
    const imagesUploaded = await service.uploadImages(req);
    return res.status(200).json(imagesUploaded);
  } catch (e) {
    return res.status(400).json({message: e.message});
  }
}
