const fs = require('fs');

const raw = fs.readFileSync('contact.html', 'utf8');

// Find sections in contact.html
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [...raw.matchAll(sectionRegex)].map(m => m[0]);
console.log('Total sections in contact.html:', sections.length);

sections.forEach((s, idx) => {
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  console.log(`[${idx + 1}] H1: ${h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : ''} | H2: ${h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : ''} | Length: ${s.length}`);
});

fs.writeFileSync('scripts/extracted_contact_sections.json', JSON.stringify(sections, null, 2));

