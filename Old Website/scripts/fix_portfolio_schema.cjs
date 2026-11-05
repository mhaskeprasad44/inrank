const fs = require('fs');

let content = fs.readFileSync('inrank2.0/portfolio.html', 'utf8');
content = content.replace(/,\s*\{\s*"@type":\s*"ListItem",\s*"position":\s*10,\s*"name":\s*"Dravya Financial Solutions[\s\S]*?\}\s*\]/m, '\n      ]');
fs.writeFileSync('inrank2.0/portfolio.html', content, 'utf8');
console.log('Removed ListItem 10 from inrank2.0/portfolio.html');

