const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
fs.readdirSync(dir).filter(f => f.endsWith('.html')).forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const bq = content.match(/<blockquote[\s\S]*?<\/blockquote>[\s\S]*?<span[^>]*style="display:block;color:#64748b[^>]*>([\s\S]*?)<\/span>/i) || content.match(/<blockquote[\s\S]*?<\/blockquote>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/i);
  const quote = (content.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i) || [])[1];
  console.log(`\n[${f}]:`);
  if (quote) console.log('  Quote:', quote.trim().replace(/\s+/g, ' '));
  if (bq) console.log('  Attribution:', bq[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
});

