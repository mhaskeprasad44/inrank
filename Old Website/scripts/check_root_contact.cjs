const fs = require('fs');
const content = fs.readFileSync('contact.html', 'utf8');
console.log('Root contact.html length:', content.length);

// Find main sections in root contact.html
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('<form') || l.includes('form id') || l.includes('h1') || l.includes('h2')) {
    console.log(`L${i+1}: ${l.trim().slice(0, 100)}`);
  }
});

