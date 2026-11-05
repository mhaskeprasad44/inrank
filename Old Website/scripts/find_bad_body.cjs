const fs = require('fs');

const corp = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/corporate.css', 'utf8');

const lines = corp.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('body {') || l.includes('body h3') || l.includes('body p')) {
    console.log(`Line ${idx + 1}: ${l}`);
  }
});

