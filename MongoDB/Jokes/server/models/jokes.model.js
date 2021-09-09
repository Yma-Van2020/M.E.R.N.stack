const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type:String,
		required: [true, "setup is required"],
		minlength: [10, "setup should have at least 10 chars"]
	},
	punchline: {
		type:String,
		require:[true, "punchline is required"],
		minlength: [3, 'punchline should have at least 3 chars']
	}
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;