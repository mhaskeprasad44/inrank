const fs = require('fs');
const html = fs.readFileSync('inrank2.0/index.html', 'utf8');

const regex = /<section\b([^>]*)>/g;
let match;
const sections = [];
while ((match = regex.exec(html)) !== null) {
  const attrs = match[1];
  const idMatch = attrs.match(/id="([^"]*)"/);
  const classMatch = attrs.match(/class="([^"]*)"/);
  sections.push({
    id: idMatch ? idMatch[1] : null,
    class: classMatch ? classMatch[1] : null,
    preview: match[0]
  });
}

console.log(JSON.stringify(sections, null, 2));

