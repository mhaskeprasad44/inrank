const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scripts/seo_geo_aeo_audit_results.json', 'utf8'));

console.log('=== SEO AUDIT SUMMARY ===');
console.log('Total HTML pages audited:', data.totalPages);

console.log('\n--- 1. H1 HEADINGS ---');
console.log('Pages with single H1 (Good):', data.h1Audit.singleH1.length);
console.log('Pages with missing H1:', data.h1Audit.missingH1.length);
if (data.h1Audit.missingH1.length > 0) console.log('Missing H1 pages:', data.h1Audit.missingH1);
console.log('Pages with multiple H1s:', data.h1Audit.multipleH1.length);
if (data.h1Audit.multipleH1.length > 0) console.log('Multiple H1 pages:', data.h1Audit.multipleH1);

console.log('\n--- 2. HEADING HIERARCHY SKIPS ---');
console.log('Pages with skipped heading levels (e.g. H1 -> H3/H4):', data.headingHierarchyIssues.length);
if (data.headingHierarchyIssues.length > 0) {
  console.log('Sample hierarchy issues:', data.headingHierarchyIssues.slice(0, 10));
}

console.log('\n--- 3. META TAGS ---');
console.log('Missing Title:', data.metaAudit.missingTitle.length, data.metaAudit.missingTitle);
console.log('Short Title (<30 chars):', data.metaAudit.shortTitle.length);
console.log('Long Title (>70 chars):', data.metaAudit.longTitle.length);
console.log('Missing Meta Description:', data.metaAudit.missingDesc.length, data.metaAudit.missingDesc);
console.log('Short Meta Description (<70 chars):', data.metaAudit.shortDesc.length);
console.log('Long Meta Description (>170 chars):', data.metaAudit.longDesc.length);
console.log('Missing Canonical Link:', data.metaAudit.missingCanonical.length);
if (data.metaAudit.missingCanonical.length > 0) console.log('Missing Canonical sample:', data.metaAudit.missingCanonical.slice(0, 10));
console.log('Missing Robots Meta:', data.metaAudit.missingRobots.length);
console.log('Missing OpenGraph Title:', data.metaAudit.missingOg.length);

console.log('\n--- 4. STRUCTURED DATA / SCHEMA.ORG ---');
console.log('Pages with JSON-LD Schema:', data.schemaAudit.pagesWithSchema);
console.log('Pages without JSON-LD Schema:', data.schemaAudit.pagesWithoutSchema.length, data.schemaAudit.pagesWithoutSchema);
console.log('Schema Types found across site:', data.schemaAudit.schemaTypesFound);
console.log('Schema Parse Errors:', data.schemaAudit.schemaErrors.length, data.schemaAudit.schemaErrors);
console.log('Pune Entity Signals in Schema:', data.schemaAudit.puneEntitySignals);

console.log('\n--- 5. SEMANTIC HTML ---');
console.log('Pages missing <main>:', data.semanticHtmlAudit.missingMain.length);
if (data.semanticHtmlAudit.missingMain.length > 0) console.log('Missing <main> sample:', data.semanticHtmlAudit.missingMain.slice(0, 10));
console.log('Pages missing <header>:', data.semanticHtmlAudit.missingHeader.length);
console.log('Pages missing <footer>:', data.semanticHtmlAudit.missingFooter.length);

console.log('\n--- 6. GEO / AEO SIGNALS ---');
console.log('Pages with FAQ content:', data.geoAeoSignals.hasFaqSection);
console.log('Pages with FAQPage schema:', data.geoAeoSignals.hasFaqSchema);
console.log('Pages with Pune/Baner location mentions:', data.geoAeoSignals.hasPuneGeoKicker);

