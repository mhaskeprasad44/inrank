const fs = require('fs');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
const burgerMatch = indexHtml.match(/<button[^>]*class=["'][^"']*burger[^"']*["'][\s\S]*?<\/button>/i);
console.log('Burger button in index.html:', burgerMatch ? burgerMatch[0] : 'None');

const drawerMatch = indexHtml.match(/<div[^>]*class=["'][^"']*mob-[^"']*["']/i);
console.log('Mobile container:', drawerMatch ? drawerMatch[0] : 'None');

const coreJs = fs.readFileSync('inrank2.0/js/core.js', 'utf8');
const burgerInCore = coreJs.split('\n').filter(l => l.includes('burger') || l.includes('mob-') || l.includes('menu-open'));
console.log('Mobile menu lines in core.js:', burgerInCore.slice(0, 10));

