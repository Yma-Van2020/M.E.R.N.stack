const Joke = require("../models/jokes.model");

// module.exports.findAllUsers = (req, res) => {
//   User.find()
//     .then(allDaUsers => res.json({ users: allDaUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}

// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({_id: req.params.id})
    .then(oneSingleJoke => res.json({joke: oneSingleJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}))
}

// module.exports.createNewUser = (req, res) => {
//   User.create(req.body)
//     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
   .then(newlyCreateJoke => res.json({joke: newlyCreateJoke}))
   .catch(err => res.json({ message: "Something went wrong", error: err }))
}
 
// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.updateExistingJoke = (req, res) => {
   Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
     .then(updatedJoke => res.json({joke: updatedJoke}))
     .catch(err => res.json({ message: "Something went wrong", error: err}))
}


// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
}
