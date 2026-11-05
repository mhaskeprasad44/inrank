const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/.*Solutions Delivered.*/gi);
console.log('Matches for Solutions Delivered in index.html:', matches);

