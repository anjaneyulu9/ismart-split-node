const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const config = require('../config/config.js');

module.exports ={
    userRegister: async (req, res) =>{
        
        const hashPassword = await bcrypt.hash(req.body.password, config.saltPassword);
        const user = new User({
            userName: req.body.userName,
            userMailId: req.body.userMailId,
            userMobileNumber: req.body.userMobileNumber,
            userPassword: hashPassword,
        });
        user.save()
        .then(user =>{
            console.log("user data got inserted successfully");
            console.log("success");
            res.send({status: "success", message: "User registered successfully"});
        }).catch(err =>{
            res.status(500).send({
                status: "failure",
                message: err.message || "Error while registering the user"
            });
        })
    }
}
