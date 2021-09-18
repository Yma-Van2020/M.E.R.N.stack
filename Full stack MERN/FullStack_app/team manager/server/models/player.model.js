const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name of the palyer is required"],
        minlength:[2, "The name should be at least 2 chars long"]
    },
    position:{
        type:String
    },
    action:{
        type:String,
        default:"undecided"
    },
    action2:{
        type:String,
        default:"undecided"
    },
    action3:{
        type:String,
        default:"undecided"
    }

},{timestamps:true});

module.exports.Player = mongoose.model("Player", PlayerSchema)