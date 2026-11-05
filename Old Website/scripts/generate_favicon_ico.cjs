const fs = require('fs');

const pngBuffer = fs.readFileSync('inrank2.0/favicon.png');

// Create standard ICO header with embedded PNG
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // icon type
header.writeUInt16LE(1, 4); // 1 image

const dirEntry = Buffer.alloc(16);
dirEntry.writeUInt8(32, 0);  // width
dirEntry.writeUInt8(32, 1);  // height
dirEntry.writeUInt8(0, 2);   // color palette
dirEntry.writeUInt8(0, 3);   // reserved
dirEntry.writeUInt16LE(1, 4); // color planes
dirEntry.writeUInt16LE(32, 6); // bpp
dirEntry.writeUInt32LE(pngBuffer.length, 8); // image size
dirEntry.writeUInt32LE(22, 12); // offset (6 + 16)

const icoBuffer = Buffer.concat([header, dirEntry, pngBuffer]);

fs.writeFileSync('inrank2.0/favicon.ico', icoBuffer);
fs.writeFileSync('favicon.ico', icoBuffer);
if (fs.existsSync('dist')) fs.writeFileSync('dist/favicon.ico', icoBuffer);
if (fs.existsSync('public')) fs.writeFileSync('public/favicon.ico', icoBuffer);

console.log('Successfully generated valid favicon.ico (size:', icoBuffer.length, 'bytes)');

