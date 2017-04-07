const gm = require('gm');

gm('./src/1.jpg')
  .write('./dest/gm/1.jpg', function (err) {
    console.log("err:", err);
  });