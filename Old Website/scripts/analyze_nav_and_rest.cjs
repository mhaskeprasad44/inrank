const fs = require('fs');

const homeHtml = fs.readFileSync('vinove_home.html', 'utf8');

// Print nav HTML
const navMatch = homeHtml.match(/<nav id="nav"[\s\S]*?<\/nav>/i);
console.log('=== FULL NAV HTML ===');
console.log(navMatch ? navMatch[0] : 'Not found');

// Print people-section
const peopleMatch = homeHtml.match(/<section class="people-section"[\s\S]*?<\/section>/i);
console.log('\n=== PEOPLE SECTION ===');
console.log(peopleMatch ? peopleMatch[0] : 'Not found');

// Print closing
const closingMatch = homeHtml.match(/<section class="closing"[\s\S]*?<\/section>/i);
console.log('\n=== CLOSING SECTION ===');
console.log(closingMatch ? closingMatch[0] : 'Not found');

