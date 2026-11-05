const fs = require('fs');
const index = fs.readFileSync('inrank2.0/index.html', 'utf8');

// Extract nav
const navMatch = index.match(/<nav id="nav"[\s\S]*?<\/div>\s*<\/div>/);
// Also let's check scrim and mob
const scrimMatch = index.match(/<div id="nav-scrim"[\s\S]*?<\/div>/);
const mobMatch = index.match(/<div id="mob"[\s\S]*?<\/div>\s*<\/div>/);

console.log('Nav found:', !!navMatch);
console.log('Scrim found:', !!scrimMatch);
console.log('Mob found:', !!mobMatch);

// Extract footer
const footerMatch = index.match(/<footer class="site-footer"[\s\S]*?<\/footer>/);
console.log('Footer found:', !!footerMatch);

