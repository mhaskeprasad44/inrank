const fs = require('fs');
const js = fs.readFileSync('inrank2.0/js/core.js', 'utf8');

const navStart = js.indexOf('Floating Navigation & Active States');
console.log(js.substring(navStart - 50, navStart + 1200));

