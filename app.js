var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');

var router = express.Router();

var catalogController = require('./controller/catalogController.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "myCollection"}));

app.use('/',catalogController);
app.use('/catalog',catalogController);
app.use('/about',catalogController);
app.use('/contactUs',catalogController);
app.use('/catalog/item/:id',catalogController);
app.use('/*',catalogController);

app.listen('8080',function(req,res){
  console.log("Server started..listening to port 8080");
});
