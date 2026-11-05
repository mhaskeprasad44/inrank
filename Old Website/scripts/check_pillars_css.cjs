const fs = require('fs');

// Let's inspect the CSS of .pillar-card-4 and .pillars-grid-4
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
const match = [];
let capturing = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('.pillars-grid-4') || lines[i].includes('.pillar-card-4')) {
    capturing = true;
  }
  if (capturing) {
    match.push(lines[i]);
    if (match.length > 60) break;
  }
}
console.log(match.join('\n'));

