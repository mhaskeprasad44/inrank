const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');
const sections = [...html.matchAll(/<section([^>]*)>([\s\S]*?)<\/section>/g)];

sections.forEach((s, i) => {
  console.log(`\n=================== SECTION #${i+1} ${s[1]} ===================`);
  console.log(s[2].slice(0, 400));
});

