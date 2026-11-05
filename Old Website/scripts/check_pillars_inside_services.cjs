const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const startTag = '<section class="capabilities-section" id="services">';
const startIdx = html.indexOf(startTag);
const endTag = '</section>';
const endIdx = html.indexOf(endTag, startIdx) + endTag.length;
const servicesSection = html.substring(startIdx, endIdx);

const pStart = servicesSection.indexOf('<div class="pillars-strip">');
const gStart = servicesSection.indexOf('<div class="services-grid">');

console.log('pillars strip from index:', pStart, 'to', gStart);
console.log('Pillars HTML:');
console.log(servicesSection.substring(pStart, gStart));

