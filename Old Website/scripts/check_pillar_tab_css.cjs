const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');

const matches = css.match(/\.pillar-tab[\s\S]*?(?=\n\n|\/\*)/g) || [];
console.log('Matches count:', matches.length);
matches.slice(0, 5).forEach(m => console.log(m));

