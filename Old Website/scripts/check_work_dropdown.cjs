const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const regex = /data-dropdown="work"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const match = html.match(regex);
if (match) {
  console.log(match[0].slice(0, 1000));
} else {
  console.log('data-dropdown="work" not found');
}
