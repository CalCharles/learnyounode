var fs = require('fs');
var count = undefined;
function countLines(callback) {
	fs.readFile(process.argv[2], function(err, contents) {
		count = contents.toString().split('\n').length -1;
		callback();
	})
}
countLines(function log(){console.log(count);});
