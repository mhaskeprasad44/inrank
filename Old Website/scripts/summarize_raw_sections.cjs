const fs = require('fs');
const sections = JSON.parse(fs.readFileSync('scripts/raw_index_sections.json', 'utf8'));

sections.forEach((s, i) => {
  console.log(`\n================ SECTION ${i + 1} ================`);
  // Print first 500 characters
  const clean = s.replace(/<style[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[\s\S]*?<\/script>/gi, '')
                 .replace(/<svg[\s\S]*?<\/svg>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim();
  console.log('Words:', clean.split(' ').length);
  console.log('Sample:', clean.slice(0, 400));
});

