const fs = require('fs');
const c = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');
const s0 = c.match(/<section class="work-hero-split"[\s\S]*?<\/section>/)[0];
console.log(s0);

