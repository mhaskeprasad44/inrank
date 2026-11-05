const fs = require('fs');
const css = fs.readFileSync('inrank2.0/css/nav.css', 'utf8');

const matches = css.match(/\.nav-item[^{]*\{[\s\S]*?\}/g) || [];
matches.slice(0, 10).forEach(m => console.log(m));

const dropMatches = css.match(/\.nav-drop[^{]*\{[\s\S]*?\}/g) || [];
dropMatches.slice(0, 10).forEach(m => console.log(m));

