const fs = require('fs');

const homeHtml = fs.readFileSync('vinove_home.html', 'utf8');

console.log('=== PAGE TITLE & META ===');
const titleMatch = homeHtml.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'None');

console.log('=== HEADER / NAV STRUCTURE ===');
const navMatch = homeHtml.match(/<header[\s\S]*?<\/header>/i) || homeHtml.match(/<nav[\s\S]*?<\/nav>/i);
if (navMatch) {
  console.log('Found Nav element! Length:', navMatch[0].length);
  // print first 1500 chars of nav
  console.log(navMatch[0].slice(0, 1500));
} else {
  console.log('Nav match not found with direct tag search');
}

console.log('\n=== MAIN SECTIONS ===');
const sectionMatches = [...homeHtml.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*>/gi)];
sectionMatches.forEach((m, idx) => {
  console.log(`Section ${idx + 1}: class="${m[1]}"`);
});

console.log('\n=== FOOTER STRUCTURE ===');
const footerMatch = homeHtml.match(/<footer[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Found Footer element! Length:', footerMatch[0].length);
  console.log(footerMatch[0].slice(0, 800));
}

