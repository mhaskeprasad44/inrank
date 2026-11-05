const fs = require('fs');
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const headerHtml = indexHtml.slice(indexHtml.indexOf('<header'), indexHtml.indexOf('</header>') + '</header>'.length);

const mobIdx = indexHtml.indexOf('<div class="mob-drawer" id="mob"');
// Find closing </div> for mob-drawer
let depth = 0;
let mobEnd = -1;
for (let i = mobIdx; i < indexHtml.length; i++) {
  if (indexHtml.startsWith('<div', i)) depth++;
  else if (indexHtml.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      mobEnd = i + '</div>'.length;
      break;
    }
  }
}
const mobDrawerHtml = indexHtml.slice(mobIdx, mobEnd);

const footerHtml = indexHtml.slice(indexHtml.indexOf('<footer'), indexHtml.indexOf('</footer>') + '</footer>'.length);

console.log('Header length:', headerHtml.length);
console.log('Mob drawer length:', mobDrawerHtml.length);
console.log('Footer length:', footerHtml.length);

