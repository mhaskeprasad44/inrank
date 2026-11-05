const fs = require('fs');

const workHtml = fs.readFileSync('inrank2.0/our-work.html', 'utf8');
const lines = workHtml.split('\n');
lines.forEach((l, i) => {
  if (l.includes('class="work-card') || l.includes("class='work-card") || l.includes('data-filter=')) {
    console.log(i + 1, l.trim());
  }
});

