const userController = require('../controller/userController.js');

module.exports = (app) =>{
    app.post('/user/register', userController.userRegister);
}