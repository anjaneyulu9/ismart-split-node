const express = require('express');
const app = express();
var config = require('./src/config/config.js');

const port = process.env.PORT || config.port;

//testing
app.get('/test', (req, res)=>{
    res.send({message: "your application is running"});
})



app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
});