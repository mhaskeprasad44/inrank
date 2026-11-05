const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('inrank2.0');

function getHtmlFiles(dir) {
  let res = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      res = res.concat(getHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      res.push(full);
    }
  }
  return res;
}

const htmlFiles = getHtmlFiles(baseDir);
let trimmedCount = 0;

function smartTrim(desc, maxLen = 158) {
  if (desc.length <= maxLen) return desc;

  // Try to find a sentence break before maxLen
  const periodIdx = desc.lastIndexOf('.', maxLen - 1);
  if (periodIdx > 110) {
    return desc.slice(0, periodIdx + 1);
  }

  // Otherwise cut at last space before maxLen - 1 and add period
  const spaceIdx = desc.lastIndexOf(' ', maxLen - 1);
  let cut = desc.slice(0, spaceIdx).trim();
  if (!cut.endsWith('.')) cut += '.';
  return cut;
}

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/(<meta\s+name=["']description["']\s+content=["'])([^"']*)(["'])/i, (m, p1, desc, p3) => {
    if (desc.length > 160) {
      const trimmed = smartTrim(desc, 158);
      trimmedCount++;
      return `${p1}${trimmed}${p3}`;
    }
    return m;
  });

  content = content.replace(/(<meta\s+content=["'])([^"']*)(["']\s+name=["']description["'])/i, (m, p1, desc, p3) => {
    if (desc.length > 160) {
      const trimmed = smartTrim(desc, 158);
      trimmedCount++;
      return `${p1}${trimmed}${p3}`;
    }
    return m;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

console.log(`Trimmed ${trimmedCount} meta descriptions to <= 158 characters.`);

