const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Let's inspect sections 1 to 16 in current index.html
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const sections = [];
let match;
while ((match = sectionRegex.exec(html)) !== null) {
  sections.push(match[0]);
}

console.log(`Found ${sections.length} sections in index.html.`);
sections.forEach((s, idx) => {
  const idMatch = s.match(/id=["']([^"']+)["']/i);
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  console.log(`Section ${idx + 1}: ID=${idMatch ? idMatch[1] : 'none'} | H1=${h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : ''} | H2=${h2 ? h2[1].replace(/<[^>]+>/g, '').trim() : ''} | Length=${s.length}`);
});

