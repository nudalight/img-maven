const fs = require('fs');
const guetzli = require('guetzli-js');
const helper = require('guetzli-js/dist/lib/helper');

// load png 
var x = helper.loadPngImage('./src/1.png');

console.log(x);
fs.writeFileSync('./dest/guetzli/1.png', x);
