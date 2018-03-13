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

    for (var i = 0; i < rows.length; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 5; j++) {
            var td = tr.insertCell();
            if (i === 0) {
                td.appendChild(document.createTextNode("Header " + (j+1)));
            } else {
                td.appendChild(document.createTextNode(i + ", " + (j+1)));
            }
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);    
  }
});

