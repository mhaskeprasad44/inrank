const fs = require('fs');
const content = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');

const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('rounded-full') && (l.includes('bg-slate-900') || l.includes('emerald-400') || l.includes('px-3'))) {
    console.log(`L${i+1}: ${l.trim().slice(0, 120)}`);
  }
});

