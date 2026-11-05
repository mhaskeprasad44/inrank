const fs = require('fs');

const content = fs.readFileSync('inrank2.0/blog/seo-complete-guide.html', 'utf8');
const lines = content.split('\n');
lines.slice(0, 50).forEach((l, i) => {
  if (l.includes('inrank.in') || l.includes('canonical') || l.includes('og:url')) {
    console.log(i + 1, l.trim());
  }
});

