const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const selectors = [
  'manifesto-section',
  'operating',
  'capabilities-section',
  'niches-section',
  'niche-card',
  'proof',
  'proof-grid',
  'comparison-section',
  'people-section',
  'testi-section',
  'pricing-section'
];

selectors.forEach(sel => {
  const count = (css.match(new RegExp('\\.' + sel, 'g')) || []).length;
  console.log(`.${sel}: ${count} occurrences`);
});

