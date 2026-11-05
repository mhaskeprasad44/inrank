const fs = require('fs');

const content = fs.readFileSync('pricing.html', 'utf8');

// Find all pricing cards or tables
// Look for sections containing prices
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('₹') || l.includes('tab-btn') || l.includes('pricing-card') || l.includes('package') || l.includes('tier') || l.includes('Web Development') || l.includes('SEO') || l.includes('Meta Ads') || l.includes('Google Ads')) {
    if (l.trim().length > 0 && l.trim().length < 200) {
      console.log(`L${i + 1}: ${l.trim()}`);
    }
  }
});

