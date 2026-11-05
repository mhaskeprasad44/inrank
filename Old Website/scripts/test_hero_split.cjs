const fs = require('fs');

let html = fs.readFileSync('inrank2.0/our-work/dravyafinancial.html', 'utf8');

const heroRegex = /<section class="work-hero-top"[\s\S]*?<\/section>/;
const match = html.match(heroRegex);
console.log(match[0]);
