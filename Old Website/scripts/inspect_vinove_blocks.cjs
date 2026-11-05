const fs = require('fs');

const corp = fs.readFileSync('scripts/vinove_assets/css/pages/corporate.css', 'utf8');

const lines = corp.split('\n');
let majorBlocks = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.startsWith('/*') || (line.includes('{') && !line.startsWith(' ') && !line.startsWith('\t') && !line.startsWith('@'))) {
    majorBlocks.push(line.trim());
  }
}

console.log('Major CSS blocks count:', majorBlocks.length);
console.log(majorBlocks.slice(0, 50).join('\n'));

