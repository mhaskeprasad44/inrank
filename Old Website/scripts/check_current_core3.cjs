const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
console.log(js.substring(3500));

