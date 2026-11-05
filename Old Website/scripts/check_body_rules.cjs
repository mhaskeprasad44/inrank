const fs = require('fs');

const corp = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/corporate.css', 'utf8');

const bodyRules = [...corp.matchAll(/(html|body)[^{]*\{[^}]*\}/g)];
console.log('Body rules in corporate.css:');
bodyRules.forEach(m => console.log(m[0]));

