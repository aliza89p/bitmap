const fs = require('fs');

const file = fs.readFileSync('img/non-palette-bitmap.bmp');

const headers = {};
console.log(file.slice(0, 4));
console.log(file[0], file[1]);


headers.type = file.toString('ascii', 0, 2);
headers.size = file.readUInt32LE(2);
headers.pixelStart = file.readUInt32LE(10);
headers.pixelWidth = file.readUInt32LE(18);
headers.pixelHeight = file.readUInt32LE(22);
headers.numberOfColors = file.readUInt32LE(46);
headers.numberOfImportantColors = file.readUInt32LE(50);


console.log(headers);
