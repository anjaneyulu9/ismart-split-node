const express = require('express');
const app = express();
var config = require('./src/config/config.js');

const port = config.port;

app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
});