const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html') && file !== 'google27965a1a30fcb004.html') {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(ROOT_DIR);

const pageKeywordMap = [];
const keywordClusters = {};
const aeoAnalysis = [];
const schemaTypes = {};
const canonicalList = new Map();

htmlFiles.forEach(file => {
  const rel = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : '';

  // Meta keywords
  const kwMatch = content.match(/<meta\s+name=["']keywords["']\s+content="([^"]*)"/i) ||
                  content.match(/<meta\s+name=["']keywords["']\s+content='([^']*)'/i);
  const rawKeywords = kwMatch ? kwMatch[1].split(',').map(s => s.trim().toLowerCase()).filter(Boolean) : [];

  // Meta description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i) ||
                    content.match(/<meta\s+name=["']description["']\s+content='([^']*)'/i);
  const desc = descMatch ? descMatch[1].trim() : '';

  // Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href="([^"]*)"/i);
  const canon = canonMatch ? canonMatch[1].trim() : '';
  if (canon) {
    if (!canonicalList.has(canon)) canonicalList.set(canon, []);
    canonicalList.get(canon).push(rel);
  }

  // Schema types
  const schemaMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  const schemas = [];
  let hasFAQ = false;
  let hasLocalBusiness = false;
  let hasBreadcrumb = false;
  let hasArticle = false;
  let hasFounderEntity = false;

  schemaMatches.forEach(sc => {
    try {
      const clean = sc.replace(/<\/?script[^>]*>/gi, '');
      const parsed = JSON.parse(clean);
      const types = Array.isArray(parsed['@graph']) 
        ? parsed['@graph'].map(item => item['@type']) 
        : [parsed['@type']];
      
      types.flat().filter(Boolean).forEach(t => {
        schemas.push(t);
        schemaTypes[t] = (schemaTypes[t] || 0) + 1;
        if (t === 'FAQPage') hasFAQ = true;
        if (t === 'LocalBusiness' || t === 'Organization' || t === 'ProfessionalService') hasLocalBusiness = true;
        if (t === 'BreadcrumbList') hasBreadcrumb = true;
        if (t === 'Article' || t === 'BlogPosting') hasArticle = true;
      });

      if (clean.includes('Prasad Mhaske') || clean.includes('founder') || clean.includes('sameAs')) {
        hasFounderEntity = true;
      }
    } catch(e) {}
  });

  // AEO / Direct Answer Box Detection
  const hasAeoBlock = content.includes('quick-answer') || 
                      content.includes('aeo-answer') || 
                      content.includes('Executive Summary') ||
                      content.includes('Quick Summary') ||
                      content.includes('Key Takeaways') ||
                      content.includes('At a Glance');

  pageKeywordMap.push({
    file: rel,
    title,
    h1,
    desc,
    rawKeywords,
    canon,
    schemas,
    hasFAQ,
    hasLocalBusiness,
    hasBreadcrumb,
    hasArticle,
    hasFounderEntity,
    hasAeoBlock
  });

  // Track primary keywords for cannibalization check
  rawKeywords.forEach(kw => {
    if (!keywordClusters[kw]) keywordClusters[kw] = [];
    keywordClusters[kw].push(rel);
  });
});

console.log(`=== AUDIT REPORT: 94 PRODUCTION PAGES ===\n`);
console.log(`Total Pages Audited: ${pageKeywordMap.length}`);

// 1. Schema breakdown
console.log('\n--- Schema Types In Use ---');
console.table(schemaTypes);

// 2. Canonical issues
console.log('\n--- Duplicate Canonicals (Multiple files claiming same canonical URL) ---');
for (const [canon, files] of canonicalList.entries()) {
  if (files.length > 1) {
    console.log(`Canonical "${canon}" claimed by:`, files);
  }
}

// 3. Potential Keyword Cannibalization
console.log('\n--- Potential Keyword Cannibalization (Keywords targeted by 3+ pages) ---');
const heavyCannibalized = Object.entries(keywordClusters)
  .filter(([kw, files]) => files.length >= 3 && kw.includes('pune'))
  .sort((a, b) => b[1].length - a[1].length);

heavyCannibalized.slice(0, 15).forEach(([kw, files]) => {
  console.log(`  "${kw}" used in ${files.length} pages:`);
  console.log(`     -> ${files.slice(0, 4).join(', ')}${files.length > 4 ? ` (+${files.length - 4} more)` : ''}`);
});

// 4. AEO & GEO Readiness
const aeoCount = pageKeywordMap.filter(p => p.hasAeoBlock).length;
const faqCount = pageKeywordMap.filter(p => p.hasFAQ).length;
const localBizCount = pageKeywordMap.filter(p => p.hasLocalBusiness).length;
const founderCount = pageKeywordMap.filter(p => p.hasFounderEntity).length;

console.log('\n--- AEO & GEO Readiness Score ---');
console.log(`Pages with Dedicated AEO/Summary Box: ${aeoCount} / ${pageKeywordMap.length} (${Math.round(aeoCount/pageKeywordMap.length*100)}%)`);
console.log(`Pages with FAQPage Schema: ${faqCount} / ${pageKeywordMap.length} (${Math.round(faqCount/pageKeywordMap.length*100)}%)`);
console.log(`Pages with LocalBusiness/Organization Schema: ${localBizCount} / ${pageKeywordMap.length}`);
console.log(`Pages with Founder/Knowledge-Graph Linking: ${founderCount} / ${pageKeywordMap.length}`);
