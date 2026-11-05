const fs = require('fs');

const serviceHtml = fs.readFileSync('inrank2.0/services/seo-company-pune.html', 'utf8');

console.log('--- Service page stylesheet links ---');
const links = serviceHtml.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/g) || [];
console.log(links);

console.log('\n--- Service page main containers ---');
const sectionMatches = serviceHtml.match(/<section[^>]*>[\s\S]*?<\/section>/g) || [];
console.log('Total sections:', sectionMatches.length);
sectionMatches.forEach((s, i) => {
  const openTag = s.match(/<section[^>]*>/)[0];
  const firstChild = s.match(/<section[^>]*>\s*<([a-z0-9]+)[^>]*>/i);
  console.log(`Sec ${i}: ${openTag} -> first child: ${firstChild ? firstChild[0].slice(0, 100) : 'none'}`);
});

