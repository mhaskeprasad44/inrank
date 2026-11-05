const fs = require('fs');
const c = fs.readFileSync('inrank2.0/our-work/greytothegreen.html', 'utf8');
const hero = c.match(/<section class="work-hero-top"[\s\S]*?<\/section>/);
console.log(hero ? hero[0] : 'NO HERO');

