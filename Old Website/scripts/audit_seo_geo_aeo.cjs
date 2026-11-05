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

const auditReport = {
  totalPages: htmlFiles.length,
  h1Audit: {
    missingH1: [],
    multipleH1: [],
    singleH1: []
  },
  headingHierarchyIssues: [],
  metaAudit: {
    missingTitle: [],
    shortTitle: [],
    longTitle: [],
    missingDesc: [],
    shortDesc: [],
    longDesc: [],
    missingCanonical: [],
    missingRobots: [],
    missingOg: []
  },
  schemaAudit: {
    pagesWithSchema: 0,
    pagesWithoutSchema: [],
    schemaTypesFound: {},
    schemaErrors: [],
    puneEntitySignals: {
      hasPuneAddress: 0,
      hasGeoCoordinates: 0,
      hasTelephone: 0,
      hasAreaServed: 0
    }
  },
  semanticHtmlAudit: {
    missingMain: [],
    missingHeader: [],
    missingFooter: []
  },
  geoAeoSignals: {
    hasFaqSection: 0,
    hasFaqSchema: 0,
    hasPuneGeoKicker: 0,
    hasDirectAnswerBlock: 0
  }
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(baseDir, file).replace(/\\/g, '/');

  // 1. H1 Check
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    auditReport.h1Audit.missingH1.push(rel);
  } else if (h1Matches.length > 1) {
    auditReport.h1Audit.multipleH1.push({ file: rel, count: h1Matches.length, titles: h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()) });
  } else {
    auditReport.h1Audit.singleH1.push({ file: rel, title: h1Matches[0].replace(/<[^>]+>/g, '').trim() });
  }

  // 2. Heading Order Check
  const headings = [];
  const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let hm;
  while ((hm = headingRegex.exec(content)) !== null) {
    headings.push(parseInt(hm[1].charAt(1)));
  }
  let prevLevel = 0;
  for (let i = 0; i < headings.length; i++) {
    const cur = headings[i];
    if (prevLevel > 0 && cur > prevLevel + 1) {
      auditReport.headingHierarchyIssues.push({
        file: rel,
        issue: `Skipped heading level: from H${prevLevel} directly to H${cur}`
      });
      break; // report once per file
    }
    prevLevel = cur;
  }

  // 3. Meta Tags
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    auditReport.metaAudit.missingTitle.push(rel);
  } else {
    const titleText = titleMatch[1].trim();
    if (titleText.length < 30) auditReport.metaAudit.shortTitle.push({ file: rel, title: titleText, len: titleText.length });
    if (titleText.length > 70) auditReport.metaAudit.longTitle.push({ file: rel, title: titleText, len: titleText.length });
  }

  const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (!descMatch || !descMatch[1].trim()) {
    auditReport.metaAudit.missingDesc.push(rel);
  } else {
    const descText = descMatch[1].trim();
    if (descText.length < 70) auditReport.metaAudit.shortDesc.push({ file: rel, desc: descText, len: descText.length });
    if (descText.length > 170) auditReport.metaAudit.longDesc.push({ file: rel, desc: descText, len: descText.length });
  }

  if (!content.includes('rel="canonical"') && !content.includes("rel='canonical'")) {
    auditReport.metaAudit.missingCanonical.push(rel);
  }

  if (!content.includes('name="robots"') && !content.includes("name='robots'")) {
    auditReport.metaAudit.missingRobots.push(rel);
  }

  if (!content.includes('property="og:title"') && !content.includes("property='og:title'")) {
    auditReport.metaAudit.missingOg.push(rel);
  }

  // 4. Schema JSON-LD
  const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let sm;
  let fileHasSchema = false;
  while ((sm = schemaRegex.exec(content)) !== null) {
    fileHasSchema = true;
    try {
      const parsed = JSON.parse(sm[1]);
      const processSchema = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        const type = obj['@type'] || (obj['@graph'] ? 'Graph' : 'Unknown');
        auditReport.schemaAudit.schemaTypesFound[type] = (auditReport.schemaAudit.schemaTypesFound[type] || 0) + 1;

        if (obj['@graph'] && Array.isArray(obj['@graph'])) {
          obj['@graph'].forEach(processSchema);
        }

        // Check local business signals
        const objStr = JSON.stringify(obj);
        if (objStr.includes('Pune') || objStr.includes('Baner')) auditReport.schemaAudit.puneEntitySignals.hasPuneAddress++;
        if (objStr.includes('geo') || objStr.includes('latitude')) auditReport.schemaAudit.puneEntitySignals.hasGeoCoordinates++;
        if (objStr.includes('87888') || objStr.includes('telephone')) auditReport.schemaAudit.puneEntitySignals.hasTelephone++;
        if (objStr.includes('areaServed')) auditReport.schemaAudit.puneEntitySignals.hasAreaServed++;
      };
      processSchema(parsed);
    } catch (e) {
      auditReport.schemaAudit.schemaErrors.push({ file: rel, error: e.message });
    }
  }

  if (fileHasSchema) auditReport.schemaAudit.pagesWithSchema++;
  else auditReport.schemaAudit.pagesWithoutSchema.push(rel);

  // 5. Semantic HTML
  if (!content.includes('<main') && !content.includes('<main ')) auditReport.semanticHtmlAudit.missingMain.push(rel);
  if (!content.includes('<header') && !content.includes('<header ')) auditReport.semanticHtmlAudit.missingHeader.push(rel);
  if (!content.includes('<footer') && !content.includes('<footer ')) auditReport.semanticHtmlAudit.missingFooter.push(rel);

  // 6. GEO / AEO signals
  if (content.toLowerCase().includes('faq') || content.toLowerCase().includes('frequently asked')) {
    auditReport.geoAeoSignals.hasFaqSection++;
  }
  if (content.includes('"FAQPage"') || content.includes("'FAQPage'")) {
    auditReport.geoAeoSignals.hasFaqSchema++;
  }
  if (content.includes('Pune') || content.includes('Baner')) {
    auditReport.geoAeoSignals.hasPuneGeoKicker++;
  }
}

fs.writeFileSync('scripts/seo_geo_aeo_audit_results.json', JSON.stringify(auditReport, null, 2), 'utf8');
console.log('Audit completed and saved to scripts/seo_geo_aeo_audit_results.json');

