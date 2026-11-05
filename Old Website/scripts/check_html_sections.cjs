const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const sections = html.split(/<section/);
sections.forEach((s, idx) => {
  if (idx === 0) return;
  const lines = ('<section' + s).split('\n');
  console.log(`\n=== SECTION ${idx} ===`);
  console.log(lines.slice(0, 15).join('\n'));
});

