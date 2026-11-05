const fs = require('fs');

const contactHtml = fs.readFileSync('vinove_contact_.html', 'utf8');
const aboutHtml = fs.readFileSync('vinove_about_.html', 'utf8');
const companiesHtml = fs.readFileSync('vinove_companies_.html', 'utf8');

console.log('=== CONTACT PAGE HERO & FORM STRUCTURE ===');
const contactHero = contactHtml.match(/<section[\s\S]*?<\/section>/i);
if (contactHero) console.log(contactHero[0].slice(0, 1000));

const contactForm = contactHtml.match(/<form[\s\S]*?<\/form>/i);
if (contactForm) console.log('\nContact Form:\n', contactForm[0].slice(0, 800));

console.log('\n=== ABOUT PAGE STRUCTURE ===');
const aboutSections = [...aboutHtml.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*>/gi)];
aboutSections.forEach((m, idx) => console.log(`About Section ${idx + 1}: ${m[1]}`));

console.log('\n=== COMPANIES PAGE STRUCTURE ===');
const compSections = [...companiesHtml.matchAll(/<section[^>]*class=["']([^"']*)["'][^>]*>/gi)];
compSections.forEach((m, idx) => console.log(`Companies Section ${idx + 1}: ${m[1]}`));

