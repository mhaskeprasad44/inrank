const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/case-studies';
const files = fs.readdirSync(dir);
for (const f of files) {
  if (f.endsWith('.html')) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const hasPillInText = /COMMERCIAL LANDSCAPING|Koregaon Park|Turnaround/i.test(content);
    console.log(`=== ${f} === (match: ${hasPillInText})`);
    if (hasPillInText) {
      const lines = content.split('\n');
      lines.forEach((l, i) => {
        if (/COMMERCIAL LANDSCAPING|Koregaon|Turnaround/i.test(l)) {
          console.log(`  L${i+1}: ${l.trim()}`);
        }
      });
    }
  }
}
