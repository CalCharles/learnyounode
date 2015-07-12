var http = require('http');
var url = require('url');

server = http.createServer(function(request, response) {
	if(request.method == 'GET') {
		parsed = url.parse(request.url, true);
		date = new Date(parsed.query.iso);
		if(parsed.pathname == '/api/parsetime') {
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.write(JSON.stringify({'hour': date.getHours(), 'minute' : date.getMinutes(), 'second': date.getSeconds()}));
		}
		else if(parsed.pathname == '/api/unixtime') {
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.write(JSON.stringify({'unixtime':date.getTime()}));
		}
		response.end();
	}
});
server.listen(process.argv[2]);
