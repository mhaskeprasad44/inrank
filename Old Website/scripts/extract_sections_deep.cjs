const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Parse sections by regex
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const rawSections = [];
let m;
while ((m = sectionRegex.exec(html)) !== null) {
  rawSections.push(m[0]);
}

console.log('Total sections in index.html:', rawSections.length);

// Let's create an extractor for each section
const extracted = {
  hero: {},
  trustedBy: {},
  services: {},
  values: {},
  process: {},
  industries: {},
  results: {},
  ourWork: {},
  caseStudies: {},
  comparison: {},
  about: {},
  testimonials: {},
  leadMagnet: {},
  pricing: {},
  faq: {},
  contact: {}
};

// Write raw sections to temporary files or inspect them
fs.writeFileSync('scripts/raw_index_sections.json', JSON.stringify(rawSections, null, 2));
console.log('Saved raw sections to scripts/raw_index_sections.json');

