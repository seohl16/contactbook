var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //1
var app = express();
var methodOverride = require('method-override');
var userConfig = require('./config/userConfig.json');

// DB setting
mongoose.connect(`mongodb+srv://authuser:${userConfig.PW}@myfirstmap.2uz9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
{useNewUrlParser:true, useUnifiedTopology:true});

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
var db = mongoose.connection; 
db.once('open', function(){
  console.log('DB connected');
});
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json()); //2 
app.use(bodyParser.urlencoded({extended:true})); //3
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));
app.use('/contacts', require('./routes/contacts'));

// DB schema // 4
// var contactSchema = mongoose.Schema({
//   name:{type:String, required:true, unique:true},
//   email:{type:String},
//   phone:{type:String}
// });
// var Contact = mongoose.model('contact', contactSchema); // 5

// Routes -> folder
// Home // 6

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
