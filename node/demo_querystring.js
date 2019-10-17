var http = require('http'); //call the built-in http module
var url = require('url'); //call the built-in url module

//create a server object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true) .query; //parse in the url entered in the browser
    var txt = q.year + " " + q.month; //define a query string for txt variable
    res.end(txt); //respond with the output of the txt variable
}).listen(8080);