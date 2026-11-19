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

const files = getHtmlFiles(ROOT_DIR);

const audit = {
  negativeSEO: [],
  negativeAEO: [],
  negativeGEO: [],
  keywordAlignment: [],
  h1SpacingIssues: []
};

files.forEach(f => {
  const rel = path.relative(ROOT_DIR, f).replace(/\\/g, '/');
  const content = fs.readFileSync(f, 'utf8');

  // 1. Title checks
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (title.length > 70) {
    audit.negativeSEO.push({ file: rel, issue: 'Title too long (>70 chars)', current: `${title.length} chars`, snippet: title });
  } else if (title.length < 30) {
    audit.negativeSEO.push({ file: rel, issue: 'Title too short (<30 chars)', current: `${title.length} chars`, snippet: title });
  }

  // 2. Meta description checks
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i) ||
                    content.match(/<meta\s+name=["']description["']\s+content='([^']*)'/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (desc.length > 175) {
    audit.negativeSEO.push({ file: rel, issue: 'Meta description too long (>175 chars)', current: `${desc.length} chars`, snippet: desc.slice(0, 60) + '...' });
  } else if (desc.length < 70) {
    audit.negativeSEO.push({ file: rel, issue: 'Meta description too short (<70 chars)', current: `${desc.length} chars`, snippet: desc });
  }

  // 3. H1 Spacing issue (<br> without space causing word concatenation in text extractors)
  const h1RawMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1RawMatch) {
    const rawH1 = h1RawMatch[1];
    if (rawH1.match(/[a-zA-Z0-9]<br\s*\/?>[a-zA-Z0-9]/i) || rawH1.match(/[a-zA-Z0-9]<br\s*\/?>\s*<[a-z0-9]+>[a-zA-Z0-9]/i)) {
      audit.h1SpacingIssues.push({ file: rel, h1: rawH1.replace(/\s+/g, ' ').trim() });
    }
  }

  // 4. AEO Issues (Direct Answer box missing)
  const hasAeoBox = content.includes('quick-answer') || 
                    content.includes('aeo-answer') || 
                    content.includes('Executive Summary') ||
                    content.includes('Key Takeaways') ||
                    content.includes('Quick Summary') ||
                    content.includes('Direct Answer') ||
                    content.includes('At a Glance');

  const hasFaqSchema = content.includes('"@type": "FAQPage"') || content.includes('"@type":"FAQPage"');
  
  if (!hasAeoBox && (rel.startsWith('services/') || rel.includes('in-pune.html') || rel.startsWith('blog/'))) {
    audit.negativeAEO.push({ file: rel, issue: 'Missing Top AEO Direct Answer / Executive Summary block' });
  }
  if (!hasFaqSchema && (rel.startsWith('services/') || rel.includes('in-pune.html'))) {
    audit.negativeAEO.push({ file: rel, issue: 'Missing FAQPage Schema markup' });
  }

  // 5. GEO Issues (Knowledge Graph / Entity linking)
  const hasFounderOrOrg = content.includes('Prasad Mhaske') || content.includes('"founder"') || content.includes('sameAs');
  const hasLocalBusiness = content.includes('LocalBusiness') || content.includes('ProfessionalService');
  if (!hasFounderOrOrg && (rel.startsWith('services/') || rel.includes('in-pune.html'))) {
    audit.negativeGEO.push({ file: rel, issue: 'Missing Knowledge Graph Founder & Entity Linkage in Schema' });
  }
  if (!hasLocalBusiness && rel.includes('pune')) {
    audit.negativeGEO.push({ file: rel, issue: 'Missing LocalBusiness / ProfessionalService Schema on Pune-targeted page' });
  }

  // 6. Keyword alignment check
  // Extract primary phrase from slug
  const slug = path.basename(rel, '.html');
  const primarySlugTerm = slug.replace(/-/g, ' ');
  const titleLower = title.toLowerCase();
  const descLower = desc.toLowerCase();
  
  const inTitle = titleLower.includes(primarySlugTerm) || primarySlugTerm.split(' ').every(w => w.length <= 2 || titleLower.includes(w));
  const inDesc = descLower.includes(primarySlugTerm) || primarySlugTerm.split(' ').every(w => w.length <= 2 || descLower.includes(w));

  audit.keywordAlignment.push({
    file: rel,
    slugTerm: primarySlugTerm,
    inTitle,
    inDesc
  });
});

console.log('=== NEGATIVE FACTOR AUDIT SUMMARY ===');
console.log(`Negative SEO Issues: ${audit.negativeSEO.length}`);
console.log(`H1 Tag Spacing Glitches (<br> concatenation): ${audit.h1SpacingIssues.length}`);
console.log(`Negative AEO Issues: ${audit.negativeAEO.length}`);
console.log(`Negative GEO Issues: ${audit.negativeGEO.length}`);

console.log('\n--- H1 Spacing Glitches Sample (Top 5) ---');
console.log(audit.h1SpacingIssues.slice(0, 5));

console.log('\n--- Negative SEO Sample (Top 5) ---');
console.log(audit.negativeSEO.slice(0, 5));

console.log('\n--- Negative AEO Sample (Top 5) ---');
console.log(audit.negativeAEO.slice(0, 5));

console.log('\n--- Negative GEO Sample (Top 5) ---');
console.log(audit.negativeGEO.slice(0, 5));

fs.writeFileSync(path.join(__dirname, 'audit_negative_factors.json'), JSON.stringify(audit, null, 2));
console.log('\nWrote full audit to scripts/audit_negative_factors.json');
