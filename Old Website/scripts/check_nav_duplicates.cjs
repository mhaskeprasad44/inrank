const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const headEnd = html.indexOf('</head>') + 7;
const mainIdx = html.indexOf('<main id="main">');
console.log('headEnd:', headEnd, 'mainIdx:', mainIdx, 'Length:', mainIdx - headEnd);
console.log(html.substring(headEnd, headEnd + 800));
console.log('--- Middle part ---');
console.log(html.substring(mainIdx - 800, mainIdx));

