const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Function to extract inner content between markers or tags
function extractSection(id) {
  const regex = new RegExp(`<section[^>]*id=["']${id}["'][^>]*>([\\s\\S]*?)<\\/section>`, 'i');
  const match = html.match(regex);
  return match ? match[1] : null;
}

const sectionIds = [
  'top',
  'trusted-by',
  'services',
  'process',
  'industries',
  'results',
  'our-work',
  'case-studies',
  'about',
  'pricing',
  'faq',
  'contact'
];

const extracted = {};

sectionIds.forEach(id => {
  const content = extractSection(id);
  if (content) {
    extracted[id] = content;
    console.log(`✓ Extracted section #${id} (${content.length} chars)`);
  } else {
    console.log(`✗ Could not find section #${id}`);
  }
});

// Also look for sections without id (comparison, testimonials, checklist)
const allSections = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/gi)];
allSections.forEach((s, idx) => {
  const attrs = s[1];
  const body = s[2];
  if (body.includes('How Inrank outperforms legacy Pune agencies')) {
    extracted['comparison'] = body;
    console.log(`✓ Extracted comparison table (${body.length} chars)`);
  }
  if (body.includes('What founders actually say')) {
    extracted['testimonials'] = body;
    console.log(`✓ Extracted testimonials (${body.length} chars)`);
  }
  if (body.includes('Built like a growth team')) {
    extracted['team-values'] = body;
    console.log(`✓ Extracted team-values (${body.length} chars)`);
  }
  if (body.includes('Download the 2026 Pune SEO')) {
    extracted['lead-magnet'] = body;
    console.log(`✓ Extracted lead-magnet (${body.length} chars)`);
  }
});

fs.writeFileSync('scripts/index_content.json', JSON.stringify(extracted, null, 2));
console.log('Saved all extracted content to scripts/index_content.json');

