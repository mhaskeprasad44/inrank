const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const OLD_LINKEDIN = 'linkedin.com/company/inranktech';
const NEW_LINKEDIN = 'https://www.linkedin.com/company/inrank-technologies/';
const NEW_FACEBOOK = 'https://www.facebook.com/profile.php?id=61590051255129';

function scan(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    if (['node_modules', '.git', 'dist'].includes(f)) return;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) {
      files = files.concat(scan(fp));
    } else if (f.endsWith('.html') && f !== 'google27965a1a30fcb004.html') {
      files.push(fp);
    }
  });
  return files;
}

const htmlFiles = scan(ROOT_DIR);

let oldLinkedInCount = 0;
let newLinkedInCount = 0;
let newFacebookCount = 0;
let missingSocialFiles = [];

htmlFiles.forEach(file => {
  const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  if (content.includes(OLD_LINKEDIN)) {
    oldLinkedInCount++;
    console.log(`Found OLD LinkedIn in: ${rel}`);
  }
  if (content.includes('linkedin.com/company/inrank-technologies')) {
    newLinkedInCount++;
  } else {
    missingSocialFiles.push({ file: rel, missing: 'LinkedIn' });
  }

  if (content.includes(NEW_FACEBOOK)) {
    newFacebookCount++;
  } else {
    missingSocialFiles.push({ file: rel, missing: 'Facebook' });
  }
});

console.log('=== SOCIAL URL VERIFICATION REPORT ===');
console.log(`Total Production HTML Files: ${htmlFiles.length}`);
console.log(`Files with OLD LinkedIn (${OLD_LINKEDIN}): ${oldLinkedInCount}`);
console.log(`Files with NEW LinkedIn (${NEW_LINKEDIN}): ${newLinkedInCount} / ${htmlFiles.length}`);
console.log(`Files with NEW Facebook (${NEW_FACEBOOK}): ${newFacebookCount} / ${htmlFiles.length}`);

if (missingSocialFiles.length > 0) {
  console.log('\nMissing from:', missingSocialFiles);
} else {
  console.log('\nALL 94 production pages 100% verified with new LinkedIn & Facebook!');
}
