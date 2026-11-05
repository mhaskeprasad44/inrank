const fs = require('fs');
const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');
console.log('inrank2.0/pricing.html length:', content.length);
// Find pricing grid or section in inrank2.0/pricing.html
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('₹') || l.includes('pricing-grid') || l.includes('class="pricing') || l.includes('Sprint')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 100)}`);
  }
});

