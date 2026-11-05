const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Find section with id="services"
const startTag = '<section class="capabilities-section" id="services">';
const startIdx = html.indexOf(startTag);
const endTag = '</section>';
const endIdx = html.indexOf(endTag, startIdx) + endTag.length;

const servicesSection = html.substring(startIdx, endIdx);
console.log('Services section length:', servicesSection.length);
console.log('Starts with:', servicesSection.slice(0, 200));
console.log('Ends with:', servicesSection.slice(-200));

