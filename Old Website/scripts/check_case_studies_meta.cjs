const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/case-studies';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const p = path.join(dir, file);
  const content = fs.readFileSync(p, 'utf8');
  const subtitleMatch = content.match(/<p style="[^"]*clamp[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  console.log(`[case-studies/${file}]:`, subtitleMatch ? subtitleMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
});

