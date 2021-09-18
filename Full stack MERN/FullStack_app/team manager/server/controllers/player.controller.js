const {Player} = require("../models/player.model")

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then(player => res.json(player))
      .catch(err => res.status(400).json(err))
}

module.exports.getAll = (req, res) => {
    Player.find()
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}


module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
     .then(confirm => res.json(confirm))
     .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then(player => res.json(player))
    .catch(err => res.status(400).json(err))
}

module.exports.updateplayer = (req, res) =>{
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedPlayer => res.json(updatedPlayer))
    .catch(err => res.status(400).json(err))
}