const fs = require('fs');
const hp2 = fs.readFileSync('homepage-2.html', 'utf8');

const mainStart = hp2.indexOf('<main');
const sectionStart = hp2.indexOf('<section', mainStart);
const sectionEnd = hp2.indexOf('</section>', sectionStart) + 10;

const heroHtml = hp2.substring(sectionStart, sectionEnd);
fs.writeFileSync('scripts/hp2_hero_raw.html', heroHtml);
console.log('Saved scripts/hp2_hero_raw.html, length:', heroHtml.length);

