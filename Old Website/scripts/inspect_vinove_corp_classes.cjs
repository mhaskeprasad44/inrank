const fs = require('fs');

const corp = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');

// Let's find all class names defined in corporate.css
const classes = [...new Set([...corp.matchAll(/\.([a-zA-Z0-9_-]+)/g)].map(m => m[1]))];
console.log('Total classes in corporate.css:', classes.length);
console.log('Sample classes:\n', classes.slice(0, 60).join(', '));

