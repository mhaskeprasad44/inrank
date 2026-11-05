const fs = require('fs');

const raw = fs.readFileSync('our-work.html', 'utf8');

// Inspect our-work.html sections
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [...raw.matchAll(sectionRegex)].map(m => m[0]);
console.log('Total sections in our-work.html:', sections.length);
sections.forEach((s, i) => {
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  console.log(`[${i + 1}] H1: ${h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : ''} | H2: ${h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : ''} | Len: ${s.length}`);
});

fs.writeFileSync('scripts/extracted_our_work_sections.json', JSON.stringify(sections, null, 2));

