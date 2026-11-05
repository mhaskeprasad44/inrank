const fs = require('fs');

const content = fs.readFileSync('scripts/build_full_inrank2_home.cjs', 'utf8');
const sections = [];
const secRegex = /<section[^>]*id=["']([^"']+)["'][^>]*class=["']([^"']+)["']/g;
let m;
while ((m = secRegex.exec(content)) !== null) {
  sections.push({ id: m[1], class: m[2] });
}
console.log('Sections in build_full_inrank2_home.cjs:');
console.log(JSON.stringify(sections, null, 2));

