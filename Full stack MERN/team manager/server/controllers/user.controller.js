const {User} = require("../models/user.model")

module.exports.register = (req, res) => {
    User.exists({email: req.body.email})
    .then(userExists => {
        //if user exists, send back an error
        if(userExists){
            return Promise.reject({
                errors: {"duplicate": "Email already exists"}
            })
        }
        //user does not exist, crete the user
        const user = new User(req.body)
        return user.save()
    })
    .then(user => res.json({msg: "Success", user:user}) )
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports.login = (req, res) => {
    
}