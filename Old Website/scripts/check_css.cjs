const fs = require('fs');

const core = fs.readFileSync('inrank2.0/css/core.css', 'utf8');
const nav = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');
const corp = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

console.log('core.css length:', core.length);
console.log('nav.css length:', nav.length);
console.log('corporate.css length:', corp.length);

// Let's check classes defined in corporate.css
const classes = [...corp.matchAll(/\.([a-zA-Z0-9_-]+)\s*\{/g)].map(m => m[1]);
console.log('Total classes in corporate.css:', classes.length);
console.log('Sample classes:', classes.slice(0, 30));

