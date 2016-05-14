const fs = require('fs');

const file = fs.readFileSync('../img/palette-bitmap.bmp');

const headers = {};
console.log(file.slice(0, 4));
console.log(file[0], file[1]);


headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
headers.pixelWidth = file.readUInt32LE(18);
headers.pixelHeight = file.readUInt32LE(22);
headers.numberOfColors = file.readUInt32LE(46);

console.log(file.toString('hex', 54, 1078));

console.log(headers);

function readBitMap(firstImage) {
  fs.readFile(firstImage, (err, data) => {
    if (err) return console.log(err);
    writeBitMap(data, 'newBitMap.bmp');
  });
}

function writeBitMap(data, newBitMap) {
  fs.writeFile(newBitMap, data, (err) => {
    if (err) return console.log(err);
    console.log('made a new bitmap');
  });
}

readBitMap('../img/palette-bitmap.bmp');
