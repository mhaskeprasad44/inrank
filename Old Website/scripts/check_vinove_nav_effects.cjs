const fs = require('fs');

const navCss = fs.readFileSync('vinove_css_nav.css', 'utf8');
const coreJs = fs.readFileSync('vinove_js_core.js', 'utf8');

console.log('=== SEARCHING FOR #nav IN navCss ===');
const navRules = navCss.match(/#nav[^{]*\{[^}]*\}/g) || [];
navRules.forEach(r => console.log(r));

console.log('\n=== KEYFRAMES IN navCss ===');
const keyframes = navCss.match(/@keyframes[^{]*\{[\s\S]*?\n\}/g) || [];
keyframes.forEach(k => console.log(k.slice(0, 300)));

console.log('\n=== SCROLL / LOAD LOGIC IN coreJs ===');
// look for scroll, nav, load, requestAnimationFrame
const navInJs = coreJs.match(/\/\* ── Navigation[\s\S]*?\/\* ── Dropdowns/i);
if (navInJs) console.log(navInJs[0]);

