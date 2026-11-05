const fs = require('fs');
const content = fs.readFileSync('pricing.html', 'utf8');

// Find sections or tabs around the pricing plans
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('₹11,999') || l.includes('₹16,999') || l.includes('₹18,999') || l.includes('₹11,499') || l.includes('tab-btn') || l.includes('data-tab')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 120)}`);
  }
});

