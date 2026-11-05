const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const scripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
console.log('Total scripts in index.html:', scripts.length);
scripts.forEach((s, i) => {
  if (s.includes('src=') || s.includes('dropdown') || s.includes('nav')) {
    console.log(`Script ${i}:`, s.slice(0, 300));
  }
});

