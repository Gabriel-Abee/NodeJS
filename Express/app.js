var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.status(201);
	res.json({'name': 'Guilherme Tadeu', 'email': 'guitadeu.py@gmail.com'});
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
