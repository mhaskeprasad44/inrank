const fs = require('fs');
const path = require('path');

function analyzeHtml(filePath) {
  if (!fs.existsSync(filePath)) return { exists: false };
  const raw = fs.readFileSync(filePath, 'utf8');
  const noScript = raw.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');
  
  const headings = [...noScript.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m => {
    return { level: 'h' + m[1], text: m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') };
  });

  const ids = [...raw.matchAll(/id=["']([^"']+)["']/gi)].map(m => m[1]);

  const textOnly = noScript.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(' ').filter(Boolean);

  return {
    exists: true,
    size: raw.length,
    headingsCount: headings.length,
    headings: headings,
    ids: ids,
    wordCount: words.length,
    textSnippet: textOnly.slice(0, 300)
  };
}

const currentFiles = [
  'index.html',
  'services.html',
  'pricing.html',
  'case-studies.html',
  'our-work.html',
  'contact.html'
];

console.log('================== CURRENT WEBSITE PAGES ==================');
const currentData = {};
currentFiles.forEach(f => {
  const res = analyzeHtml(f);
  currentData[f] = res;
  console.log(`[${f}] Words: ${res.wordCount} | Headings: ${res.headingsCount} | Size: ${res.size}`);
});

console.log('\n================== INRANK 2.0 PAGES ==================');
const v2Files = [
  'inrank2.0/index.html',
  'inrank2.0/services.html',
  'inrank2.0/pricing.html',
  'inrank2.0/case-studies.html',
  'inrank2.0/contact.html',
  'inrank2.0/about.html'
];
const v2Data = {};
v2Files.forEach(f => {
  const res = analyzeHtml(f);
  v2Data[f] = res;
  console.log(`[${f}] Words: ${res.wordCount} | Headings: ${res.headingsCount} | Size: ${res.size}`);
});

// Compare index.html
console.log('\n================== DETAILED COMPARISON: INDEX.HTML ==================');
console.log('Current index.html Headings (' + currentData['index.html'].headings.length + '):');
currentData['index.html'].headings.forEach(h => console.log(`  ${h.level.toUpperCase()}: ${h.text}`));

console.log('\nInrank 2.0 index.html Headings (' + v2Data['inrank2.0/index.html'].headings.length + '):');
v2Data['inrank2.0/index.html'].headings.forEach(h => console.log(`  ${h.level.toUpperCase()}: ${h.text}`));

