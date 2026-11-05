const fs = require('fs');
const hp2 = fs.readFileSync('homepage-2.html', 'utf8');

const styleStart = hp2.indexOf('<style>');
const styleEnd = hp2.indexOf('</style>') + 8;
const styleContent = hp2.substring(styleStart, styleEnd);
console.log(styleContent.substring(1000, 4000));

