const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to recursively get all HTML files (excluding dist, node_modules, .git)
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'dist' || file === 'node_modules' || file === '.git' || file === 'brain' || file === '.gemini') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html') && !file.includes('template') && !file.includes('draft') && !file.includes('homepage-2')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);
console.log(`Found ${htmlFiles.length} HTML files for audit.`);

const auditResults = {
  totalFiles: htmlFiles.length,
  missingTitle: [],
  duplicateTitles: {},
  titleLengthIssues: [],
  missingMetaDesc: [],
  descLengthIssues: [],
  missingCanonical: [],
  canonicalMismatches: [],
  missingH1: [],
  multipleH1: [],
  missingAltImages: [],
  schemaIssues: [],
  brokenInternalLinks: [],
  aeoBlocks: 0,
  geoSchemaCount: 0
};

const allInternalLinks = [];
const existingSlugs = new Set();

// Register all valid relative slugs
htmlFiles.forEach(f => {
  const rel = path.relative(ROOT_DIR, f).replace(/\\/g, '/');
  existingSlugs.add('/' + rel);
  if (rel === 'index.html') existingSlugs.add('/');
});

htmlFiles.forEach(filePath => {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (!titleMatch) {
    auditResults.missingTitle.push(relPath);
  } else {
    const title = titleMatch[1].trim();
    if (!auditResults.duplicateTitles[title]) auditResults.duplicateTitles[title] = [];
    auditResults.duplicateTitles[title].push(relPath);

    if (title.length < 30 || title.length > 70) {
      auditResults.titleLengthIssues.push({ file: relPath, title, len: title.length });
    }
  }

  // 2. Meta Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i) ||
                    content.match(/<meta\s+name=["']description["']\s+content='([^']*)'/i);
  if (!descMatch || !descMatch[1].trim()) {
    auditResults.missingMetaDesc.push(relPath);
  } else {
    const desc = descMatch[1].trim();
    if (desc.length < 70 || desc.length > 175) {
      auditResults.descLengthIssues.push({ file: relPath, len: desc.length, desc: desc.slice(0, 40) + '...' });
    }
  }

  // 3. Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (!canonMatch) {
    auditResults.missingCanonical.push(relPath);
  } else {
    const canon = canonMatch[1].trim();
    const expected = relPath === 'index.html' ? 'https://inranktech.com/' : `https://inranktech.com/${relPath}`;
    if (canon !== expected && canon !== `https://inranktech.com/${relPath}`) {
      auditResults.canonicalMismatches.push({ file: relPath, canon, expected });
    }
  }

  // 4. H1 tag check
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    auditResults.missingH1.push(relPath);
  } else if (h1Matches.length > 1) {
    auditResults.multipleH1.push({ file: relPath, count: h1Matches.length });
  }

  // 5. Image Alt attributes
  const imgTags = content.match(/<img[^>]+>/gi) || [];
  let fileMissingAlts = 0;
  imgTags.forEach(tag => {
    if (!tag.includes('alt=') || tag.match(/alt=["']\s*["']/)) {
      fileMissingAlts++;
    }
  });
  if (fileMissingAlts > 0) {
    auditResults.missingAltImages.push({ file: relPath, count: fileMissingAlts });
  }

  // 6. Schema.org JSON-LD check
  const schemaMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  if (schemaMatches.length > 0) {
    auditResults.geoSchemaCount++;
    schemaMatches.forEach(sm => {
      const rawJson = sm.replace(/<\/?script[^>]*>/gi, '').trim();
      try {
        JSON.parse(rawJson);
      } catch (e) {
        auditResults.schemaIssues.push({ file: relPath, error: e.message });
      }
    });
  }

  // 7. AEO / Quick Answer Box
  if (content.includes('Quick Answer') || content.includes('aeo-quick-answer') || content.includes('Direct Answer')) {
    auditResults.aeoBlocks++;
  }

  // 8. Internal links check
  const hrefMatches = content.match(/href=["'](\/[^"'#?]+|\.\/[^"'#?]+|[^"'#:]+\.html)["']/gi) || [];
  hrefMatches.forEach(hm => {
    const rawHref = hm.replace(/href=["']/, '').replace(/["']$/, '');
    let normalized = rawHref.startsWith('/') ? rawHref : '/' + rawHref;
    if (normalized.endsWith('.html') || normalized === '/') {
      allInternalLinks.push({ from: relPath, to: normalized });
    }
  });
});

// Check broken internal links
allInternalLinks.forEach(link => {
  if (!existingSlugs.has(link.to)) {
    auditResults.brokenInternalLinks.push(link);
  }
});

// Deduplicate duplicates list
const realDuplicates = {};
Object.entries(auditResults.duplicateTitles).forEach(([title, files]) => {
  if (files.length > 1) {
    realDuplicates[title] = files;
  }
});

console.log("=== COMPREHENSIVE SITE AUDIT SUMMARY ===");
console.log(`Audited: ${auditResults.totalFiles} files`);
console.log(`Missing Titles: ${auditResults.missingTitle.length}`);
console.log(`Duplicate Titles: ${Object.keys(realDuplicates).length}`);
console.log(`Title Length Issues (<30 or >70): ${auditResults.titleLengthIssues.length}`);
console.log(`Missing Meta Descriptions: ${auditResults.missingMetaDesc.length}`);
console.log(`Desc Length Issues (<70 or >175): ${auditResults.descLengthIssues.length}`);
console.log(`Missing Canonicals: ${auditResults.missingCanonical.length}`);
console.log(`Canonical Mismatches: ${auditResults.canonicalMismatches.length}`);
console.log(`Missing H1s: ${auditResults.missingH1.length}`);
console.log(`Multiple H1s: ${auditResults.multipleH1.length}`);
console.log(`Images Missing Alt: ${auditResults.missingAltImages.length} files`);
console.log(`Schema JSON-LD Syntax Errors: ${auditResults.schemaIssues.length}`);
console.log(`Broken Internal Links: ${auditResults.brokenInternalLinks.length}`);
console.log(`AEO / Quick Answer Blocks Found: ${auditResults.aeoBlocks}`);
console.log(`Pages with Schema JSON-LD: ${auditResults.geoSchemaCount}`);

console.log('Missing Title file:', auditResults.missingTitle);
console.log('Missing Meta Desc file:', auditResults.missingMetaDesc);
console.log('Missing Canonical file:', auditResults.missingCanonical);
console.log('Canonical Mismatches:', auditResults.canonicalMismatches);
console.log('Missing H1 file:', auditResults.missingH1);

if (auditResults.brokenInternalLinks.length > 0) {
  console.log("\nBroken Links Sample:", auditResults.brokenInternalLinks.slice(0, 5));
}
console.log('\nAll Long/Short Titles:');
auditResults.titleLengthIssues.forEach(t => console.log(`  [${t.len} chars] ${t.file}: "${t.title}"`));

console.log('\nAll Long/Short Descriptions:');
auditResults.descLengthIssues.forEach(d => console.log(`  [${d.len} chars] ${d.file}: "${d.desc}"`));

if (auditResults.multipleH1.length > 0) {
  console.log("\nMultiple H1 Sample:", auditResults.multipleH1.slice(0, 5));
}
if (Object.keys(realDuplicates).length > 0) {
  console.log("\nDuplicate Titles Sample:", Object.entries(realDuplicates).slice(0, 3));
}
