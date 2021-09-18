const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    fistName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
           validator: val =>  /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
           message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "password must be 8 chars or longer"]
    }
}, {timestamps:true})

//create a temp confirm pw attribute in our schema
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(val => this._confirmPassword = val)

UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password and confirm password must match")
    }
    next()
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
    .then(hashPassword => {
        this.password = hashPassword
        next()
    })
})

module.exports.User = mongoose.model("User", UserSchema)