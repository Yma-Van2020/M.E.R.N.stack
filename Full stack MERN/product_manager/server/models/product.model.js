
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[
            true,
            "Title is required"
        ],
        minlength:[3, "Title should be longer than 3 chars"]
    },
    price: {
        type: Number,
        required:[
            true,
            "Price is required"
        ],
        min:[0, "Price should be a positive number"]
    },
    description: {
        type: String,
        required:[
            true,
            "Price is required"
        ],
        minlength:[8, "Description should be longer than 8 chars"]
    },
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema);