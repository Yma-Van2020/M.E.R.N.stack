const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/piratesdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection establish"))
    .catch(err => console.log("there was an error", err))