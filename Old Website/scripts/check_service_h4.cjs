const fs = require('fs');

const serviceHtml = fs.readFileSync('inrank2.0/services/seo-company-pune.html', 'utf8');
const lines = serviceHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<h4') || l.includes('</h4')) {
    console.log(i + 1, l.trim());
  }
});

