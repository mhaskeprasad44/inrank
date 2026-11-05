const fs = require('fs');
const hp2 = fs.readFileSync('homepage-2.html', 'utf8');

const headEnd = hp2.indexOf('</head>');
console.log('=== HEAD SECTION ===');
console.log(hp2.substring(0, Math.min(headEnd + 7, 2500)));

const mainStart = hp2.indexOf('<main');
const section1End = hp2.indexOf('</section>', mainStart) + 10;
console.log('=== HERO SECTION ===');
console.log(hp2.substring(mainStart, Math.min(section1End, mainStart + 4000)));

