const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const testSelectors = [
  'stage-deliverables',
  'addons-grid',
  'addons-title',
  'addon-item',
  'addon-price',
  'work-stats',
  'work-stat',
  'testi-stars',
  'testi-avatar'
];

console.log('Corporate CSS Selector Presence:');
testSelectors.forEach(sel => {
  const found = css.includes('.' + sel);
  console.log(` - .${sel}: ${found ? 'EXISTS' : 'MISSING'}`);
});

