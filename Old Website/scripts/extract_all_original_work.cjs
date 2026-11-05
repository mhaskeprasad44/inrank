const fs = require('fs');

const content = fs.readFileSync('our-work.html', 'utf8');

// Find all cards or structured descriptions in root our-work.html
const regex = /<article[\s\S]*?<\/article>/g;
let match;
let i = 1;
while ((match = regex.exec(content)) !== null) {
  console.log(`\n=== Card ${i++} ===`);
  const c = match[0];
  const titleMatch = c.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/);
  const catMatch = c.match(/class="[^"]*category[^"]*"[^>]*>([\s\S]*?)<\//) || c.match(/class="[^"]*tag[^"]*"[^>]*>([\s\S]*?)<\//) || c.match(/class="[^"]*kicker[^"]*"[^>]*>([\s\S]*?)<\//);
  const pMatch = c.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  const filterMatch = c.match(/data-filter="([^"]*)"/);
  const linkMatch = c.match(/href="([^"]*)"/g);
  
  console.log('Title:', titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Filter:', filterMatch ? filterMatch[1] : 'N/A');
  console.log('Category:', catMatch ? catMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Desc:', pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Links:', linkMatch ? linkMatch.map(l => l.replace(/href="|"/g, '')).join(', ') : 'N/A');
}

