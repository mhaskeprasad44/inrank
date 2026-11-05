const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const matches = html.match(/<!-- 7\.[\s\S]*?<\/section>/);
if (matches) {
  console.log(matches[0].substring(0, 500));
} else {
  console.log('No comment matching <!-- 7.');
  const idx = html.indexOf('proof');
  console.log('First index of proof:', idx);
}

