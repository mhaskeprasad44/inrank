const fs = require('fs');
const path = require('path');

const dir = 'inrank2.0/our-work';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  console.log(`\n========================================`);
  console.log(`PAGE: ${f}`);
  console.log(`========================================`);
  
  // Extract Title, Subtitle, Overview
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  const sub = (content.match(/<p style="[^"]*clamp[^"]*"[^>]*>([\s\S]*?)<\/p>/i) || [])[1];
  const overview = content.match(/<p class="case-desc">([\s\S]*?)<\/p>/) || content.match(/The Commercial Challenge & Solution[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  const quote = content.match(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/i);
  const author = content.match(/class="case-quote-author"[^>]*>([\s\S]*?)<\//i) || content.match(/class="quote-author"[^>]*>([\s\S]*?)<\//i);
  
  console.log('H1:', h1 ? h1.replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Subtitle:', sub ? sub.replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Overview:', overview ? overview[1].replace(/<[^>]+>/g, '').trim().slice(0, 250) + '...' : 'N/A');
  if (quote) console.log('Quote:', quote[1].replace(/<[^>]+>/g, '').trim().slice(0, 200) + '...');
});

