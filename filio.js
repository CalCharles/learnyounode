var fs = require("fs");
var pth = require("path");
var path = process.argv[2], end = "." + process.argv[3];
var result = undefined;
fs.readdir(path, function(err, list) {
	result = (list.filter(function(val) {
		return pth.extname(val) == end;
	}));
	for(var i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
});
