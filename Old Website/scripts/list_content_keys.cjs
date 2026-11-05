const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scripts/index_content.json', 'utf8'));
console.log('Sections in index_content.json:');
for (const key of Object.keys(raw)) {
  const html = raw[key];
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '(no h2)';
  console.log(`- ${key}: ${h2}`);
}

