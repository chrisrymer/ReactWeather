/**
 * Created by crymer on 12/09/2016.
 */
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use( function (req, res, next) {
    if(PORT != 3000) {
         if(req.headers['x-forwarded-proto'] === 'http') {
            next();
         } else {
            res.redirect('http://' + req.hostname + req.url);
         }
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("Express Sever is up on port " + PORT);
});