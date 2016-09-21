/**
 * Created by crymer on 12/09/2016.
 */
var express = require('express');

// App
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Express Sever is up");
})