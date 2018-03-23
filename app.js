var express = require('express');
var http = require('http');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
app.use('/static',express.static('static'));
app.use('/node_modules',express.static('node_modules'));

app.get("/", function (req, res) {

    var html = fs.readFileSync('view/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
})


http.createServer(app).listen(3000, function () {
    console.log('Server is Runing on localhost:3000');
})
