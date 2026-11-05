const fs = require('fs');
const html = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/index.html', 'utf8');

const matches = [...html.matchAll(/<section([^>]*)>/g)];
matches.forEach((m, idx) => {
  console.log(`[${idx}] <section${m[1]}>`);
});

