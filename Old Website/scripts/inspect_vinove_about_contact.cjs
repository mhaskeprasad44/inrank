const fs = require('fs');

['about', 'contact'].forEach(sp => {
  const html = fs.readFileSync(`scripts/vinove_${sp}.html`, 'utf8');
  const sections = [...html.matchAll(/<section[^>]*class="([^"]*)"[^>]*>/gi)];
  console.log(`\n=== ${sp.toUpperCase()} ===`);
  console.log('Sections:', sections.map(s => s[1]));
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'none');
});

