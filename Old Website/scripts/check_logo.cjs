const http = require('http');
const fs = require('fs');

// Check what /img/logo.png is
const logoPath = 'c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/img/logo.png';
console.log('Logo stats:', fs.statSync(logoPath));

// Let's also check all images in img/ and public/
console.log('Files in inrank2.0/img:', fs.readdirSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/img'));

