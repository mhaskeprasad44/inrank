const fs = require('fs');
const v = fs.readFileSync('scripts/vinove_assets/css/nav.css', 'utf8').split('\n');
const i = fs.readFileSync('inrank2.0/css/nav.css', 'utf8').split('\n');

for (let idx = 0; idx < Math.min(v.length, i.length); idx++) {
  const vLine = v[idx].trim();
  const iLine = i[idx].trim();
  if (vLine !== iLine && !vLine.includes('rgba(200,85,61') && !iLine.includes('rgba(0, 157, 73')) {
    console.log('Diff at line ' + (idx + 1));
    console.log('  V: ' + vLine.substring(0, 90));
    console.log('  I: ' + iLine.substring(0, 90));
    // advance a bit
  }
}
if (i.length > v.length) {
  console.log('Extra lines in I from line ' + v.length + ' to ' + i.length);
}
