var net = require('net');
var server = net.createServer(function(socket) {
	date = new Date()
	socket.write(date.getFullYear()+ '-'+ '0'+(date.getMonth() +1)+ '-'+
		date.getDate() + ' 0' + date.getHours()+":" + date.getMinutes()+'\n'); 
	socket.end();
});
server.listen(process.argv[2]);
