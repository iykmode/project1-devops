var http = require('http');
var dt = require('./myfirstmodule');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    res.write("The date and time are currently: " + dt.myDateTime()) //call the custom date module and write a response to the client
    res.end('Hello World!'); //end the response
}).listen(8080);//the server object listens on port 8080