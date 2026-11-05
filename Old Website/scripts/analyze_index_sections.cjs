const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const sections = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/g)];
console.log('Total sections in inrank2.0/index.html:', sections.length);
sections.forEach((s, i) => {
  const attr = s[1];
  const h2 = s[2].match(/<h[123][^>]*>([\s\S]*?)<\/h[123]>/);
  const pill = s[2].match(/class="[^"]*pill[^"]*"[^>]*>([\s\S]*?)<\//);
  console.log(`#${i+1}: ${(pill ? pill[1].trim() : '').padEnd(30)} | ${h2 ? h2[1].replace(/<[^>]+>/g, '').trim().slice(0, 50) : 'NO HEADING'} | attrs: ${attr.slice(0, 50)}`);
});

