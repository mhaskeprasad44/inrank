const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const head = html.substring(0, html.indexOf('</head>'));
console.log(head);

