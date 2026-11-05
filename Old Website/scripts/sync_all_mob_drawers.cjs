const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
const mobMatch = indexHtml.match(/<!-- Mobile Drawer Menu \(#mob\) -->[\s\S]*?<\/div>\s*<\/div>/);

if (!mobMatch) {
  console.error('Could not find mob block in index.html');
  process.exit(1);
}

const mobBlock = mobMatch[0];
console.log('Extracted mobBlock length:', mobBlock.length);

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Match old mob block: <div id="mob"[\s\S]*?<\/div>\s*<\/div>
  const oldMobMatch = content.match(/<!-- Mobile Drawer Menu \(#mob\) -->[\s\S]*?<\/div>\s*<\/div>/) ||
                      content.match(/<div id="mob"[\s\S]*?<\/div>\s*<\/div>/);
  
  if (oldMobMatch) {
    content = content.replace(oldMobMatch[0], mobBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  } else {
    console.log('No mob found in:', filePath);
  }
}

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (f.endsWith('.html') && full !== path.normalize('inrank2.0/index.html')) {
      updateFile(full);
    }
  }
}

walk('inrank2.0/services');
walk('inrank2.0/our-work');
console.log('Finished updating all subpages.');

