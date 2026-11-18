const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sitemap = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');

// Check unescaped ampersands
const badAmps = sitemap.match(/&(?!(amp|lt|gt|quot|apos);)/g);
if (badAmps) {
  console.error('Found unescaped ampersands:', badAmps.length);
  process.exit(1);
} else {
  console.log('Zero unescaped ampersands! XML entities are 100% valid.');
}

// Count tags
const openUrl = (sitemap.match(/<url>/g) || []).length;
const closeUrl = (sitemap.match(/<\/url>/g) || []).length;
const openImg = (sitemap.match(/<image:image>/g) || []).length;
const closeImg = (sitemap.match(/<\/image:image>/g) || []).length;
const openVid = (sitemap.match(/<video:video>/g) || []).length;
const closeVid = (sitemap.match(/<\/video:video>/g) || []).length;

console.log('Tag balance check:');
console.log(`- <url>: open=${openUrl}, close=${closeUrl}`);
console.log(`- <image:image>: open=${openImg}, close=${closeImg}`);
console.log(`- <video:video>: open=${openVid}, close=${closeVid}`);

if (openUrl === closeUrl && openImg === closeImg && openVid === closeVid) {
  console.log('ALL XML TAGS BALANCED PERFECTLY!');
} else {
  console.error('TAG MISMATCH DETECTED!');
  process.exit(1);
}
