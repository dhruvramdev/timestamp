const express = require('express');
const path = require('path');

const convertor = require('./timestamp.js');
const port = process.env.PORT || 3000 ;

var app = express() ;

app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

app.get( '/' , (req , res) => {
    console.log("req");
    res.sendFile("index.html" );
});

app.get( '/:timestamp' , (req , res) => {
    console.log("req");

    res.json(convertor.timestamp(req.params.timestamp));

});



app.listen( port , () => {
    console.log(`Server is up on port ${port}!`);
});
