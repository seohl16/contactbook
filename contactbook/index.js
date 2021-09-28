var express = require('express');
var mongoose = require('mongoose');
var app = express();
var userConfig = require('./config/userConfig.json');

// DB setting
mongoose.connect(`mongodb+srv://authuser:${userConfig.PW}@myfirstmap.2uz9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`); // 1
var db = mongoose.connection; //2
//3
db.once('open', function(){
  console.log('DB connected');
});
//4
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
