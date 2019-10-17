var http = require('http');
var dt = require('./myfirstmodule');
var uc = require('../node_modules/upper-case')

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    res.write("The date and time are currently: " + dt.myDateTime()) //call the custom date module and write a response to the client
    res.end(uc('Hello World!')); //end the response with the output in upper case
}).listen(8080);//the server object listens on port 8080