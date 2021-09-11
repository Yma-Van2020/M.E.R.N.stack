const {Product} = require("../models/product.model")

module.exports.createProduct = (req, res) => {
    const {title, price, description} = req.body;
    Product.create({
        title, price, description
    }).then(product => res.json(product))
      .catch(err => res.json(err))
}

module.exports.getAll = (req, res) => {
    Product.find({})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    Product.find({_id: req.params.id})
    .then(person => res.json(person))
    .catch(err => res.json(err))
}