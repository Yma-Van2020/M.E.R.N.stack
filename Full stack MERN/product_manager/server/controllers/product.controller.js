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
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProd => res.json(updatedProd))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}