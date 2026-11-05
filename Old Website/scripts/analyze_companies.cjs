const fs = require('fs');

const compHtml = fs.readFileSync('vinove_companies_.html', 'utf8');
const ecoHtml = fs.readFileSync('vinove_ecosystem_.html', 'utf8');

console.log('=== COMPANIES PORTFOLIO SECTION ===');
const portMatch = compHtml.match(/<section class="portfolio[^"]*"[\s\S]*?<\/section>/i);
if (portMatch) {
  console.log(portMatch[0].slice(0, 1500));
} else {
  console.log('Portfolio match not found');
}

console.log('\n=== ECOSYSTEM SECTIONS ===');
const ecoSections = [...ecoHtml.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*>/gi)];
ecoSections.forEach((m, idx) => console.log(`Eco Section ${idx + 1}: ${m[1]}`));

