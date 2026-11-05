const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const opEnd = html.indexOf('</section>', html.indexOf('id="process"')) + 10;
const servStart = html.indexOf('<section class="capabilities-section" id="services">');
const servEnd = html.indexOf('</section>', servStart) + 10;
const nichesStart = html.indexOf('<section class="niches-section" id="niches">');

console.log('Between process and services:');
console.log(JSON.stringify(html.substring(opEnd, servStart)));

console.log('Between services and niches:');
console.log(JSON.stringify(html.substring(servEnd, nichesStart)));

