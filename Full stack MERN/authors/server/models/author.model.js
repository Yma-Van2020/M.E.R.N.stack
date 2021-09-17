const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        requred: [
            true,
            "The name of the author is required"
        ],
        minlength: [3, "Name should be at least three chars long"]
    }
}, {timestamps: true});


module.exports.Author = mongoose.model("Author", AuthorSchema);