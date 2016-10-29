// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index', {usuarios: [
                                     {nombre: "lolo", correo: "lolo@x.com"},
                                     {nombre: "lola", correo: "lola@x.com"}
                                   ]
                         });
});

app.listen(8000);
console.log('8080 is the magic port');
