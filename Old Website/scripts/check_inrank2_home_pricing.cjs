const fs = require('fs');
const content = fs.readFileSync('inrank2.0/index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('id="pricing"') || (i > 1050 && i < 1180 && (l.includes('₹') || l.includes('pricing-card') || l.includes('section')))) {
    console.log(`L${i+1}: ${l.trim().slice(0, 100)}`);
  }
});

