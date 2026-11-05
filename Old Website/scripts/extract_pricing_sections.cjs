const fs = require('fs');

const raw = fs.readFileSync('pricing.html', 'utf8');

// Find sections in pricing.html
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [...raw.matchAll(sectionRegex)].map(m => m[0]);
console.log('Total sections in pricing.html:', sections.length);

sections.forEach((s, idx) => {
  const idMatch = s.match(/id=["']([^"']+)["']/i);
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  console.log(`[${idx + 1}] ID: ${idMatch ? idMatch[1] : 'none'} | H2: ${h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : ''} | Length: ${s.length}`);
});

fs.writeFileSync('scripts/extracted_pricing_sections.json', JSON.stringify(sections, null, 2));

