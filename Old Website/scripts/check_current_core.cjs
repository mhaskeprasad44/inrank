const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
console.log('core.js lines:', js.split('\n').length);
console.log(js.substring(0, 1500));

