const fs = require('fs');
const css = fs.readFileSync('scripts/vinove_nav.css', 'utf8');

// Print the last 10,000 characters of vinove_nav.css
console.log(css.substring(css.length - 8000));

