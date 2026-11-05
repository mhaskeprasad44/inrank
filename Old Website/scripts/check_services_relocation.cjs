const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const marqueeIdx = html.indexOf('class="marquee-band"');
const philIdx = html.indexOf('id="philosophy"');
const servIdx = html.indexOf('id="services"');
const nichesIdx = html.indexOf('id="niches"');

console.log('marqueeIdx:', marqueeIdx);
console.log('philIdx:', philIdx);
console.log('servIdx:', servIdx);
console.log('nichesIdx:', nichesIdx);

// Check pillars strip inside services
const pillarsMatch = html.match(/<!-- 4 Pillars Architecture Benchmark Strip[\s\S]*?<\/div>\s*<\/div>/);
console.log('pillarsMatch found?', !!pillarsMatch);
if (pillarsMatch) {
  console.log(pillarsMatch[0].slice(0, 300));
}

