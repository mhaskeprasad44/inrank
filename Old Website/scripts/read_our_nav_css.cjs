const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
console.log(css.substring(0, 3500));

