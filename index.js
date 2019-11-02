const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var config = require('./src/config/config.js');

const mongoose = require('mongoose');
mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("successfully connected to DB");
}).catch(err =>{
    console.log("problem occured while connecting to the DB");
})


require('./src/route/userRoute.js')(app);



const port = process.env.PORT || config.port;
app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
});