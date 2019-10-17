var http = require('http');
var fs = require('fs'); //call the built-in file system module

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) { //call module funtion to read the html file
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); //respond with the data output of the called funtion
        res.end();
    });
}).listen(8080);