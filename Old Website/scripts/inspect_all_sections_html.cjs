const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const sections = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/g)];

let out = '';
sections.forEach((s, i) => {
  out += `\n=================== SECTION #${i+1}: ${s[1].trim()} ===================\n`;
  out += s[2].trim() + '\n';
});

fs.writeFileSync('scripts/all_sections_dump.txt', out, 'utf8');
console.log('Saved utf8 dump, total sections:', sections.length);
