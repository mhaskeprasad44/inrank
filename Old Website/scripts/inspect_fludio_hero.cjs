const fs = require('fs');
const fludio = fs.readFileSync('inrank2.0/our-work/fludio.html', 'utf8');
const sIdx = fludio.indexOf('<section class="work-hero-split"');
const eIdx = fludio.indexOf('</section>', sIdx);
console.log(fludio.substring(sIdx, eIdx + 10));

