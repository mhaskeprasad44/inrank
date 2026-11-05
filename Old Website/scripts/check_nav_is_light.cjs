const fs = require('fs');

const nav = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/nav.css', 'utf8');

const isLightMatches = [...nav.matchAll(/#nav\.is-light[^{]*\{[^}]*\}/g)];
console.log('is-light matches in nav.css:');
isLightMatches.forEach(m => console.log(m[0]));

