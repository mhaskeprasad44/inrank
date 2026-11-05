const fs = require('fs');

const csHtml = fs.readFileSync('inrank2.0/case-studies.html', 'utf8');
const lines = csHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('class="cs-card') || l.includes('class="work-card') || l.includes('data-filter=')) {
    console.log(i + 1, l.trim());
  }
});

