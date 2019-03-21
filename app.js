var path = require('path');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


var home = require('./routes/controller');
app.use('/',home);
module.exports = app;
app.listen(8080);
console.log('listening to port 8080');
