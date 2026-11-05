const fs = require('fs');

const html = fs.readFileSync('vinove_home.html', 'utf8');

console.log('Title:', (html.match(/<title>([^<]+)<\/title>/) || [])[1]);
console.log('Meta description:', (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) || [])[1]);

// Check stylesheets
const stylesheets = [];
const linkRegex = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
let m;
while ((m = linkRegex.exec(html)) !== null) {
  stylesheets.push(m[0]);
}
console.log('\nStylesheets:');
stylesheets.forEach(s => console.log('  ' + s));

// Extract Header
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('\n--- Header HTML ---');
  console.log(headerMatch[0].substring(0, 2000));
}

// Extract Sections
console.log('\n--- Sections Analysis ---');
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
let secMatch;
let secIndex = 1;
while ((secMatch = sectionRegex.exec(html)) !== null) {
  const secHtml = secMatch[0];
  const secClass = (secHtml.match(/class=["']([^"']+)["']/) || [])[1];
  const secId = (secHtml.match(/id=["']([^"']+)["']/) || [])[1];
  const h1 = (secHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  const h2 = (secHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
  console.log(`Section ${secIndex++}: id="${secId || ''}" class="${secClass || ''}"`);
  if (h1) console.log(`   H1: ${h1}`);
  if (h2) console.log(`   H2: ${h2}`);
}

// Extract scripts / libraries
console.log('\n--- Script tags ---');
const scripts = [];
const scriptRegex = /<script[^>]+src=["']([^"']+)["'][^>]*>/gi;
while ((m = scriptRegex.exec(html)) !== null) {
  scripts.push(m[1]);
}
scripts.forEach(s => console.log('  ' + s));

