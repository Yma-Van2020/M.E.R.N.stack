const { Pirate} = require("../models/pirate.model")

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
    .then(pirate => res.json(pirate))
      .catch(err => res.status(400).json(err))
}

module.exports.getAll = (req, res) => {
    Pirate.find().sort({name:1})
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err))
}


module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.id})
     .then(confirm => res.json(confirm))
     .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req, res) => {
    Pirate.findOne({_id: req.params.id})
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err))
}

module.exports.updatePirate = (req, res) =>{
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedpirate => res.json(updatedpirate))
    .catch(err => res.status(400).json(err))
}