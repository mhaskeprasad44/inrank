const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');

const regex = /<section[^>]*class=["']([^"']+)["'][^>]*>/g;
let m;
const sections = [];
while ((m = regex.exec(html)) !== null) {
  sections.push(m[1]);
}
console.log('Vinove sections:');
sections.forEach((s, idx) => console.log((idx+1) + ': ' + s));

// Also let's list main headings
const hRegex = /<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/g;
console.log('\nVinove Headings:');
while ((m = hRegex.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text.length > 0 && text.length < 120) {
    console.log(`  <${m[1]}>: ${text}`);
  }
}

