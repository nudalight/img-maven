const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng');

const _ = require('lodash');

imagemin(['src/*.{jpg,png}'], 'dest/imagemin/1', {
  plugins: [
    // imageminJpegtran({
    //   progressive: false // loseless or progressive
    // }),
    imageminPngquant({quality: '60-75'}),
    imageminOptipng()
  ]
}).then(files => {
  console.log(files); // files.data

  _.each(files, (item) => {

  });
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});




