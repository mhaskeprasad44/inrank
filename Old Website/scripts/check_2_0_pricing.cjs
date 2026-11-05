const fs = require('fs');

if (fs.existsSync('inrank2.0/pricing.html')) {
  const content = fs.readFileSync('inrank2.0/pricing.html', 'utf8');
  console.log('inrank2.0/pricing.html length:', content.length);
  // Find pricing cards, tables, prices
  const prices = content.match(/₹[\d,]+|\bRs\.?\s*[\d,]+/gi) || [];
  console.log('Prices found in inrank2.0/pricing.html:', prices);
} else {
  console.log('inrank2.0/pricing.html does not exist.');
}

