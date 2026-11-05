const fs = require('fs');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
const dropMatch = indexHtml.match(/<div class="work-dropdown-grid">[\s\S]*?<\/div>\s*<\/div>/);

if (dropMatch) {
  console.log('--- CURRENT WORK DROPDOWN IN INDEX.HTML ---');
  console.log(dropMatch[0]);
  console.log('Contains dravyafinancial?:', dropMatch[0].includes('dravyafinancial'));
  console.log('Contains greytothegreen?:', dropMatch[0].includes('greytothegreen'));
} else {
  console.log('work-dropdown-grid not found');
}

