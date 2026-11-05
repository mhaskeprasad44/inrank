const fs = require('fs');

const data = JSON.parse(fs.readFileSync('awrange_extracted.json', 'utf8'));

console.log('=== AWRANGE DEEP ANALYSIS ===\n');

data.forEach((p, i) => {
  console.log(`[${i+1}] ${p.url}`);
  console.log(`  Title: ${p.title}`);
  console.log(`  H1: ${p.h1}`);
  console.log(`  Desc: ${p.desc}`);
  console.log(`  Phones: ${p.phoneMatches.join(', ')}`);
  console.log(`  Emails: ${p.emailMatches.join(', ')}`);
  console.log(`  Pricing Mentions: ${p.pricingMentions.join(', ')}`);
  console.log(`  Form Count: ${p.formCount}`);
  if (p.formFields && p.formFields.length) {
    console.log(`  Form Fields Sample: ${p.formFields.slice(0, 5).join(' | ')}`);
  }
  console.log('--------------------------------------------------');
});

// Check tech stack from awrange_home.html
const homeHtml = fs.readFileSync('awrange_home.html', 'utf8');
const isWp = homeHtml.includes('wp-content') || homeHtml.includes('wp-includes');
const isElementor = homeHtml.includes('elementor');
const isAstro = homeHtml.includes('astro');
const isNext = homeHtml.includes('_next');

console.log('\n--- Tech Stack Details ---');
console.log('WordPress:', isWp);
console.log('Elementor:', isElementor);
console.log('Astro:', isAstro);
console.log('Next.js:', isNext);

// Check scripts & forms in home
const cforms = [...homeHtml.matchAll(/<form[^>]*class=["'](.*?)["'][^>]*>/gi)].map(m => m[1]);
console.log('Form classes:', cforms);

// Check if any schema markup exists
const schemas = [...homeHtml.matchAll(/<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log('Schema count on Home:', schemas.length);
if (schemas.length) {
  try {
    schemas.forEach((s, idx) => {
      const parsed = JSON.parse(s);
      console.log(`Schema ${idx+1} @type:`, parsed['@type'] || (parsed['@graph'] ? parsed['@graph'].map(g => g['@type']) : 'unknown'));
    });
  } catch (e) {
    console.log('Schema parsing note:', e.message);
  }
}
