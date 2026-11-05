const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/case-studies';
fs.readdirSync(dir).filter(f => f.endsWith('.html')).forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log(`\n========================================`);
  console.log(`CASE STUDY: ${f}`);
  
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  const sub = (content.match(/<p style="[^"]*clamp[^"]*"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
  const overview = content.match(/The Commercial Challenge & Solution[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  const quote = content.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i);
  
  console.log('H1:', h1 ? h1.replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Subtitle:', sub ? sub.replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Overview:', overview ? overview[1].replace(/<[^>]+>/g, '').trim().slice(0, 180) + '...' : 'N/A');
  if (quote) console.log('Quote:', quote[1].replace(/<[^>]+>/g, '').trim().slice(0, 150) + '...');
});

