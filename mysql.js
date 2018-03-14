var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5789);

var data = [
  { "name":"John", "age":31, "city":"New York" },
  { "name":"Mary", "age":30, "city":"New York" },
  { "name":"Tom", "age":30, "city":"New York" },
]
JSON.stringify(data);

app.get('/',function(req,res,next){
    res.render('home');
});

app.get('/create',function(req,res,next){
    res.render('create');
});

app.get('/all',function(req,res,next){
  return res.send(data)
});

app.get('/get/:id',function(req,res,next){
  return res.send(data[req.params.id])
});

app.get('/insert',function(req,res,next){
  return true
});

app.get('/update/:id',function(req,res,next){
  return true
});

app.get('/delete/:id',function(req,res,next){
  return true
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
