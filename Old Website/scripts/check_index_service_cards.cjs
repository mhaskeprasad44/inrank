const fs = require('fs');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const sIdx = indexHtml.indexOf('class="service-checklist"');
if (sIdx !== -1) {
  console.log('--- service-checklist in index.html ---');
  console.log(indexHtml.slice(sIdx - 100, sIdx + 1200));
} else {
  // Search for service cards on homepage
  const scIdx = indexHtml.indexOf('service-card');
  console.log('service-card snippet in index.html:');
  console.log(indexHtml.slice(scIdx, scIdx + 1500));
}

