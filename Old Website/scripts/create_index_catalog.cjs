const fs = require('fs');
const sections = JSON.parse(fs.readFileSync('scripts/raw_index_sections.json', 'utf8'));

// Let's create an organized catalog of each section's exact content
const catalog = {};

sections.forEach((s, idx) => {
  const num = idx + 1;
  // Get all text
  const clean = s.replace(/<style[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[\s\S]*?<\/script>/gi, '');
  catalog[`section_${num}`] = {
    raw: s,
    clean: clean
  };
});

fs.writeFileSync('scripts/index_sections_catalog.json', JSON.stringify(catalog, null, 2));
console.log('Saved catalog with 16 sections.');

