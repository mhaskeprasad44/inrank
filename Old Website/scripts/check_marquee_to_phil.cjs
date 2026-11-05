const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const marqueeEnd = html.indexOf('</section>', html.indexOf('class="marquee-band"')) + 10;
const philStart = html.indexOf('<section class="manifesto-section" id="philosophy">');

console.log('Between marquee and philosophy:');
console.log(JSON.stringify(html.substring(marqueeEnd, philStart)));

