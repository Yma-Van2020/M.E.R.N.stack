const mongoose = require("mongoose")

const  PirateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name of the pirate is required"]
    },
    imageUrl:{
        type:String,
        required:[true, "Image url of the pirate is required"]
    },
    numOfTreasure:{
        type:Number,
        required:[true, "num of treasure chests of the pirate is required"],
        min:[1, "num of treasure chests of the pirate is required"]
    },
    catchPhrase:{
        type:String,
        required:[true, "Catch phrases of the pirate is required"]
    },
    position:{
        type:String,
        required:[true, "Position of the pirate is required"],
        minlength:[1, "num of treasure chests of the pirate is required"]
    },
    pegLeg:{
        type:String,
        required:[true, "Name of the pirate is required"]
    },
    eyePatch:{
        type:String,
        required:[true, "Name of the pirate is required"]
    },
    hookHand:{
        type:String,
        required:[true, "Name of the pirate is required"]
    }

},{timestamps:true});

module.exports. Pirate = mongoose.model("Pirate",  PirateSchema)