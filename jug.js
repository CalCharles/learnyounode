var http = require('http');
var fs = require('fs');
var bl = require('bl');
var data1 = undefined, data2 = undefined, data3 = undefined;
http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data) {
	       if(err) {
	       		return err;
	       }
		data1 = data.toString();
		http.get(process.argv[3], function(response) {
	response.pipe(bl(function(err, data) {
	       if(err) {
	       		return err;
	       }
		data2 = data.toString();
		http.get(process.argv[4], function(response) {
	response.pipe(bl(function(err, data) {
	       if(err) {
	       		return err;
	       }
		data3 = data.toString();
		console.log(data1);
		console.log(data2);
		console.log(data3);
	})) }); })) }); })) }); 
