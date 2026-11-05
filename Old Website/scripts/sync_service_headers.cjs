const fs = require('fs');
const path = require('path');

// Extract the master header block from index.html
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const startMarker = '<!-- Top Scroll Progress Bar -->';
const endMarker = '<main id="main">';

const startIndex = indexHtml.indexOf(startMarker);
const endIndex = indexHtml.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in index.html');
  process.exit(1);
}

const masterHeaderBlock = indexHtml.substring(startIndex, endIndex).trim();
console.log('Master header block length:', masterHeaderBlock.length);

function list(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res = res.concat(list(full));
    else if (f.endsWith('.html')) res.push(full);
  }
  return res;
}

const serviceFiles = list('inrank2.0/services');
let updatedCount = 0;

for (const file of serviceFiles) {
  let html = fs.readFileSync(file, 'utf8');

  // Find where the existing header starts:
  // It starts after skip-link or noscript, either with <!-- Top Scroll Progress Bar --> or <!-- Unified ... --> or <header id="nav"
  let hStart = html.indexOf('<!-- Top Scroll Progress Bar -->');
  if (hStart === -1) {
    hStart = html.indexOf('<!-- Unified');
  }
  if (hStart === -1) {
    hStart = html.indexOf('<header id="nav"');
  }

  const hEnd = html.indexOf('<main id="main">');

  if (hStart !== -1 && hEnd !== -1 && hStart < hEnd) {
    const before = html.substring(0, hStart);
    const after = html.substring(hEnd);
    const newHtml = before + masterHeaderBlock + '\n\n  ' + after;
    fs.writeFileSync(file, newHtml, 'utf8');
    updatedCount++;
    console.log(`Updated header in: ${file}`);
  } else {
    console.warn(`Could not find header boundaries in: ${file} (hStart: ${hStart}, hEnd: ${hEnd})`);
  }
}

console.log(`\nSuccessfully synced master header to ${updatedCount} service files.`);

