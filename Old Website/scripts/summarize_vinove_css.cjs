const fs = require('fs');

const corp = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');
const nav = fs.readFileSync('scripts/vinove_assets/css/nav.css', 'utf8');

console.log('--- CORPORATE CSS SECTIONS ---');
const comments = corp.match(/\/\*[\s\S]*?\*\//g) || [];
comments.slice(0, 20).forEach(c => console.log(c.replace(/\n/g, ' ').substring(0, 80)));

console.log('\n--- NAV CSS SECTIONS ---');
const navComments = nav.match(/\/\*[\s\S]*?\*\//g) || [];
navComments.slice(0, 20).forEach(c => console.log(c.replace(/\n/g, ' ').substring(0, 80)));

