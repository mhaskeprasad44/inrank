const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const lines = css.split('\n');
const selectors = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('/* ══') || (line.startsWith('/*') && line.includes('Section'))) {
    console.log(line + (lines[i+1] ? ' ' + lines[i+1].trim() : ''));
  }
}

