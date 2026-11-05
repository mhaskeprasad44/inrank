const fs = require('fs');
const s = fs.readFileSync('inrank2.0/index.html', 'utf8');

const mobIdx = s.indexOf('<div id="mob"');
let depth = 0;
let mobEnd = -1;
for (let i = mobIdx; i < s.length; i++) {
  if (s.startsWith('<div', i)) depth++;
  else if (s.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      mobEnd = i + '</div>'.length;
      break;
    }
  }
}
const mobDrawerHtml = s.slice(mobIdx, mobEnd);
console.log('mobIdx:', mobIdx, 'mobEnd:', mobEnd, 'length:', mobDrawerHtml.length);
console.log('Tail of mobDrawerHtml:', mobDrawerHtml.slice(-150));

