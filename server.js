var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000);