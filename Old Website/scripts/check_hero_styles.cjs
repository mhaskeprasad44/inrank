const fs = require('fs');

const corpCss = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/corporate.css', 'utf8');

// Look for [data-reveal] in corporate.css or core.css
const revealMatches = [...corpCss.matchAll(/\[data-reveal\][^{]*\{[^}]*\}/g)];
console.log('data-reveal in corporate.css:', revealMatches.map(m => m[0]));

// Check .hero styles in corporate.css
const heroMatches = [...corpCss.matchAll(/\.hero[^{]*\{[^}]*\}/g)];
console.log('.hero matches in corporate.css:\n', heroMatches.slice(0, 10).map(m => m[0]));

// Check .display in corporate.css
const displayMatches = [...corpCss.matchAll(/\.display[^{]*\{[^}]*\}/g)];
console.log('.display matches in corporate.css:\n', displayMatches.slice(0, 5).map(m => m[0]));

