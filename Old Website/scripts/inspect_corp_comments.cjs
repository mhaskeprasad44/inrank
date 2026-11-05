const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const comments = css.match(/\/\*[\s\S]*?\*\//g) || [];
console.log('Comments / Sections in corporate.css:');
comments.slice(0, 30).forEach(c => {
  const line = c.replace(/\/\*|\*\//g, '').trim().split('\n')[0];
  if (line.length > 3) console.log(' - ' + line);
});

