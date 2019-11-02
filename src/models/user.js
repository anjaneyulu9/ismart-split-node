const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true        
    },
    userMailId:{
        type: String,
        required: true,
        unique: true
    },
    userMobileNumber:{
        type: Number,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema, "User");