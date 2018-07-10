let http = require('http');
let server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	if(request.url == '/'){
		response.end('Hello World\n');
	} else if(request.url == '/contato'){
		response.end('guitadeu.py@gmail.com');
	} else{
		response.end('Not Found!')
	}
});
server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');