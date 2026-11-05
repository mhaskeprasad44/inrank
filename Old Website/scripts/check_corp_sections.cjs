const fs = require('fs');

const corp = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');

const sections = [
  'hero',
  'manifesto',
  'operating',
  'proof',
  'people-section',
  'closing',
  'site-footer',
  'button',
  'arrow-link',
  'badge'
];

sections.forEach(s => {
  const matches = [...corp.matchAll(new RegExp(`\\.${s}[^{]*\\{`, 'g'))];
  console.log(`Class .${s}: ${matches.length} matches`);
});

