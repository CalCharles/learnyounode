module.exports = function(path, extention, callback) {
	try {
		var fs = require("fs");
		var pth = require("path"); 
		extention = "." + extention;
		fs.readdir(path, function(err, list) {
			if(err) {
				return callback(err);
			}
			var result = list.filter(function(val) {
				return pth.extname(val) == extention;
			});
			callback(null, result);
		});
	} catch (err) {
		callback(err);
	}
}
