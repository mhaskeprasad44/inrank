const fs = require('fs');

const pages = ['services.html', 'pricing.html', 'about.html', 'contact.html', 'case-studies.html', 'our-work.html'];

pages.forEach(p => {
  const filePath = `c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/${p}`;
  if (!fs.existsSync(filePath)) {
    console.log(`[NOT FOUND] ${p}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=== ${p} (${html.length} bytes) ===`);
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'none');
  const sections = [...html.matchAll(/<section([^>]*)>/g)];
  sections.forEach((s, idx) => console.log(`  [${idx}] <section${s[1]}>`));
});

