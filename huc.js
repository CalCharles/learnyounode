var map = require('through2-map');
var http = require('http');
server = http.createServer(function(request, response) {
	if(request.method == 'POST') {
		request.pipe(map(function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}
});
server.listen(process.argv[2]);
