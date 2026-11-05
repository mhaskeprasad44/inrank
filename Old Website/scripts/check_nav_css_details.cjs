const fs = require('fs');
const navCss = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
console.log('nav.css length:', navCss.length);
console.log('has drop-mega:', navCss.includes('drop-mega'));
console.log('has work-dropdown-grid:', navCss.includes('work-dropdown-grid'));
console.log('has mob-hd:', navCss.includes('mob-hd'));

