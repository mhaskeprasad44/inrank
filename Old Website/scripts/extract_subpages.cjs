const fs = require('fs');

function extractPageContent(filename) {
  if (!fs.existsSync(filename)) return null;
  const html = fs.readFileSync(filename, 'utf8');
  
  // Section inspection
  const sectionRegex = /<section[\s\S]*?<\/section>/gi;
  const sections = [];
  let m;
  while ((m = sectionRegex.exec(html)) !== null) {
    sections.push(m[0]);
  }

  return {
    filename,
    length: html.length,
    sectionCount: sections.length,
    sections
  };
}

const pages = ['services.html', 'pricing.html', 'case-studies.html', 'our-work.html', 'contact.html'];
const pageData = {};
pages.forEach(p => {
  const d = extractPageContent(p);
  pageData[p] = d;
  console.log(`Page: ${p} | Size: ${d.length} | Sections: ${d.sectionCount}`);
});

fs.writeFileSync('scripts/raw_subpages.json', JSON.stringify(pageData, null, 2));
console.log('Saved raw subpages to scripts/raw_subpages.json');

