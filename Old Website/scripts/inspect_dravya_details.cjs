const fs = require('fs');

if (fs.existsSync('our-work/dravyafinancial.html')) {
  const txt = fs.readFileSync('our-work/dravyafinancial.html', 'utf8');
  console.log('--- our-work/dravyafinancial.html ---');
  const titleMatch = txt.match(/<title>([\s\S]*?)<\/title>/);
  const h1Match = txt.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const pMatch = txt.match(/<p class="[^"]*lead[^"]*"[^>]*>([\s\S]*?)<\/p>/) || txt.match(/<p class="[^"]*hero[^"]*"[^>]*>([\s\S]*?)<\/p>/) || txt.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  console.log('Title:', titleMatch ? titleMatch[1].trim() : 'N/A');
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('Desc:', pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
}

