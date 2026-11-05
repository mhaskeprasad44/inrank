// Script to test both top and scrolled states of header
const fs = require('fs');

// 1. In corporate.css, ensure [data-reveal].is-visible is defined
let corp = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/corporate.css', 'utf8');

const revealFix = `
/* Reveal states */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-reveal].is-visible,
[data-reveal].revealed {
  opacity: 1 !important;
  transform: none !important;
}
`;

corp += revealFix;
fs.writeFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/css/corporate.css', corp);

// 2. In core.js, add both classes on reveal
let js = fs.readFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/js/core.js', 'utf8');
js = js.replace(/el\.classList\.add\('is-visible'\)/g, "el.classList.add('is-visible', 'revealed')");
js = js.replace(/entry\.target\.classList\.add\('is-visible'\)/g, "entry.target.classList.add('is-visible', 'revealed')");
fs.writeFileSync('c:/Users/PrasadMhaske/Downloads/Anti Websites/Web/Inrank/inrank2.0/js/core.js', js);

console.log('Fixed reveal classes in corporate.css and core.js!');

