const fs = require('fs');

const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const workDropdownIdx = html.indexOf('work-dropdown-grid');
if (workDropdownIdx !== -1) {
  console.log('--- Our Work Dropdown in index.html ---');
  console.log(html.slice(workDropdownIdx - 100, workDropdownIdx + 3000));
} else {
  console.log('work-dropdown-grid not found');
}

