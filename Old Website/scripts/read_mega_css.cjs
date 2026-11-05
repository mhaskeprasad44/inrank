const fs = require('fs');
const nav = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
console.log(nav.split('\n').slice(1030, 1160).join('\n'));

