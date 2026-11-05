const fs = require('fs');

const css = fs.readFileSync('inrank2.0/css/corporate.css', 'utf8');
const idx = css.indexOf('.shell {');
if (idx !== -1) {
  console.log(css.slice(idx, idx + 300));
} else {
  // search .shell
  const lines = css.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('.shell')) console.log(`Line ${i + 1}: ${l}`);
  });
}

