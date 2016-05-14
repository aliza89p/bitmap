const fs = require('fs');

const file = fs.readFileSync('img/palette-bitmap.bmp');

const headers = {};
console.log(file.slice(0, 4));
console.log(file[0], file[1]);


headers.type = file.toString('ascii', 0, 2);
//
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
headers.numOfColors = file.readUInt32LE(46);
headers.numOfBits = file.readUInt32LE(28);
console.log(file.readUInt32LE(54));

console.log(headers);
