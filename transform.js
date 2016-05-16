const fs = require('fs');
const file = fs.readFileSync('img/palette-bitmap.bmp');
module.exports = exports = headers;

const headers = {};

headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelWidth = file.readUInt32LE(18);
headers.pixelHeight = file.readUInt32LE(22);
headers.numberOfColors = file.readUInt32LE(46);
headers.pixelStart = file.readUInt32LE(10);

headers.transform = (image) => {
  var writeStream = fs.createWriteStream(image);

  for (var i = 0; i < file.length; i++) {
    var data = file[i];
    if (i > 54 && i < headers.pixelStart) data = data / Math.ceil(Math.random() * 6) + 1;
    var buf = new Buffer(1);
    buf.writeUInt8(data, 0);
    writeStream.write(buf);
  }
  console.log('transforming');
  writeStream.end();
};

headers.transform('img/new-palette-bitmap.bmp');
