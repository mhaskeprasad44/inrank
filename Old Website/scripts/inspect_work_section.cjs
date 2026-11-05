const fs = require('fs');
const html = fs.readFileSync('inrank2.0/our-work.html', 'utf8');

const filterBarStart = html.indexOf('<!-- Filter Bar -->');
const workSectionEnd = html.indexOf('</section>', html.indexOf('class="work-grid"'));

console.log('Filter bar & work section structure:');
console.log(html.slice(filterBarStart, filterBarStart + 1200));

