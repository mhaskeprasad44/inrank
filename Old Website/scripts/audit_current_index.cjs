const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

console.log('=== INDEX.HTML OVERVIEW ===');
console.log('Total characters:', indexHtml.length);

// Extract all <section> tags and their IDs/classes/headings
const sections = [...indexHtml.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/gi)];
console.log('Found sections count:', sections.length);

sections.forEach((sec, idx) => {
  const attrs = sec[1];
  const body = sec[2];
  const idMatch = attrs.match(/id=["']([^"']*)["']/i);
  const classMatch = attrs.match(/class=["']([^"']*)["']/i);
  const headings = [...body.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
  
  console.log(`\n--- Section ${idx + 1} ---`);
  console.log(`ID: ${idMatch ? idMatch[1] : 'none'}`);
  console.log(`Class sample: ${classMatch ? classMatch[1].slice(0, 80) : 'none'}`);
  console.log(`Headings:`, headings.slice(0, 5));
});

