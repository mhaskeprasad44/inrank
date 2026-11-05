const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const oldWebsiteDir = path.join(rootDir, 'Old Website');
const inrank2Dir = path.join(rootDir, 'inrank2.0');

// Items that must NOT be moved to Old Website (repository & infrastructure files)
const PRESERVE_ROOT_ITEMS = new Set([
  '.git',
  '.gitignore',
  '.env.example',
  'package.json',
  'package-lock.json',
  'bun.lock',
  'node_modules',
  'scripts',
  'inrank2.0',
  'Old Website',
  'google27965a1a30fcb004.html', // Google Search Console verification
  '90f4a8ce98944c96bd03407379c73647.txt' // Bing / IndexNow verification
]);

function main() {
  console.log('--- Step 1: Create Old Website folder ---');
  if (!fs.existsSync(oldWebsiteDir)) {
    fs.mkdirSync(oldWebsiteDir, { recursive: true });
    console.log('Created:', oldWebsiteDir);
  } else {
    console.log('Old Website folder already exists');
  }

  console.log('\n--- Step 2: Identify and move legacy/irrelevant files to Old Website ---');
  const rootItems = fs.readdirSync(rootDir);
  let movedCount = 0;

  for (const item of rootItems) {
    if (PRESERVE_ROOT_ITEMS.has(item)) {
      continue;
    }

    const srcPath = path.join(rootDir, item);
    const destPath = path.join(oldWebsiteDir, item);

    try {
      if (fs.existsSync(destPath)) {
        console.log(`Destination already exists for ${item}, replacing...`);
        fs.rmSync(destPath, { recursive: true, force: true });
      }
      fs.renameSync(srcPath, destPath);
      console.log(`Moved: ${item} -> Old Website/${item}`);
      movedCount++;
    } catch (err) {
      console.error(`Error moving ${item}:`, err.message);
      // Fallback copy then remove
      try {
        fs.cpSync(srcPath, destPath, { recursive: true });
        fs.rmSync(srcPath, { recursive: true, force: true });
        console.log(`Fallback copied & removed: ${item}`);
        movedCount++;
      } catch (err2) {
        console.error(`Fallback failed for ${item}:`, err2.message);
      }
    }
  }
  console.log(`Total items moved to Old Website: ${movedCount}`);

  console.log('\n--- Step 3: Promote inrank2.0 contents to Root ---');
  if (!fs.existsSync(inrank2Dir)) {
    throw new Error('inrank2.0 directory does not exist! Aborting.');
  }

  const v2Items = fs.readdirSync(inrank2Dir);
  console.log(`Found ${v2Items.length} items in inrank2.0`);
  let promotedCount = 0;

  for (const item of v2Items) {
    const srcPath = path.join(inrank2Dir, item);
    const destPath = path.join(rootDir, item);

    try {
      // Copy recursively to root
      fs.cpSync(srcPath, destPath, { recursive: true });
      console.log(`Promoted to root: ${item}`);
      promotedCount++;
    } catch (err) {
      console.error(`Error promoting ${item}:`, err.message);
    }
  }
  console.log(`Total items promoted to root: ${promotedCount}`);

  console.log('\n--- Step 4: Verification of 2.0 at Root ---');
  const criticalFiles = [
    'index.html',
    'about.html',
    'services.html',
    'pricing.html',
    'portfolio.html',
    'our-work.html',
    'case-studies.html',
    'blog.html',
    'contact.html',
    'contact.php',
    'sitemap.xml',
    'robots.txt',
    'llms.txt',
    'llms-full.txt',
    'favicon.ico',
    'services',
    'blog',
    'our-work',
    'case-studies',
    'css',
    'js',
    'tech-stack',
    'google27965a1a30fcb004.html',
    '90f4a8ce98944c96bd03407379c73647.txt'
  ];

  let allValid = true;
  for (const f of criticalFiles) {
    const p = path.join(rootDir, f);
    const exists = fs.existsSync(p);
    if (!exists) {
      console.error(`CRITICAL MISSING: ${f}`);
      allValid = false;
    } else {
      const isDir = fs.statSync(p).isDirectory();
      console.log(`Verified [${isDir ? 'DIR' : 'FILE'}]: ${f}`);
    }
  }

  if (allValid) {
    console.log('\nSUCCESS! All critical 2.0 assets are verified at root.');
    // Remove inrank2.0 directory now that it is successfully promoted
    try {
      fs.rmSync(inrank2Dir, { recursive: true, force: true });
      console.log('Cleaned up redundant inrank2.0/ folder.');
    } catch (e) {
      console.warn('Note: could not remove inrank2.0 folder:', e.message);
    }
  } else {
    console.error('\nWARNING: Some files were not verified!');
  }
}

main();
