var fs = require('fs');
var args = process.argv;
var fileBuff = fs.readFileSync(process.argv[2]);
var strBuf = fileBuff.toString();
var count = strBuf.split('\n').length -1;
console.log(count);
