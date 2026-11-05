const fs = require('fs');
const html = fs.readFileSync('scripts/vinove_raw.html', 'utf8');
const closingIdx = html.indexOf('class="closing');
if (closingIdx !== -1) {
  console.log(html.substring(closingIdx, closingIdx + 1800));
}

