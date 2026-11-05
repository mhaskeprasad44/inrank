const fs = require('fs');

if (fs.existsSync('pricing.html')) {
  const content = fs.readFileSync('pricing.html', 'utf8');
  console.log('Root pricing.html length:', content.length);
  // Find pricing cards, tables, prices
  const prices = content.match(/₹[\d,]+|\bRs\.?\s*[\d,]+/gi) || [];
  console.log('Prices found in root pricing.html:', prices);

  // Search for pricing sections, tiers, packages
  const h2s = content.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
  console.log('H2s:', h2s);

  const h3s = content.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || [];
  console.log('H3s:', h3s.slice(0, 20));
} else {
  console.log('pricing.html does not exist in root.');
}

