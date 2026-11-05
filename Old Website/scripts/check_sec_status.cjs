const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const regexes = [
  '.niches-section',
  '.proof',
  '.work-section',
  '.comparison-section',
  '.people-section',
  '.testi-section',
  '.lead-magnet-section',
  '.pricing-section',
  '.faq-section',
  '.closing-section',
  '.ft'
];

regexes.forEach(r => {
  const count = (css.match(new RegExp(r.replace('.', '\\.'), 'g')) || []).length;
  console.log(`${r} -> count: ${count}`);
});
