'use strict';

var fs = require('fs');
var crazyMixUp = require('./shuffle');
var bitmap = require('./read_headers');


module.exports = fs.readFile('./img/bitmap1.bmp', (err, buff) => {
  if (err) throw err;

  var buffObj = new Bitmap.bitMapData(buff);

  var pallete = [];

  var readColorPallete = (buff) => {
    var counter = 0;

    for (var i = 54; i < 182; i += 4) {
      pallete[i] = [
        buff.readUInt8(i),
        buff.readUInt8(i + 1),
        buff.readUInt8(i + 2), 0];
      counter++;
    }
  };

  readColorPallete(buff);

  crazyMixUp.transform(pallete);

  var transformedPallete = pallete.toString();

  buff.write(transformedPallete, 54, 256);

  fs.writeFile('./img/randomized.bmp', buff, (err) => {
    if (err) throw err;
  });
});
