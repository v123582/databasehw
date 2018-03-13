// # mysql.js

app.get('/',function(req,res,next){
    res.render('home');
  });


app.get('/api/all',function(req,res,next){
  var context = {};
  mysql.pool.query('SELECT * FROM todo', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }    
    return JSON.stringify(rows);
  });
});

# table.js

var req = new XMLHttpRequest();
req.open('GET', '/api/all', true);
req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    var rows = response.row;

    var body = document.body;
    var tbl  = document.createElement("table");
    tbl.setAttribute("id", "table1");
    tbl.style.width  = "75%";
    tbl.style.border = "1px solid black";

    for (var i = 0; i > rows.lenght ; i++) {
        ....
    }
    body.appendChild(tbl);    
  }
});