console.log(process.argv.slice(2).map(function toint(a) {return parseInt(a);}).reduce(function sum(a,b){return a+b;}));
