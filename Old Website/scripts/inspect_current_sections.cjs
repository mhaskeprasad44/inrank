const fs = require('fs');

function inspectSections(filename) {
  if (!fs.existsSync(filename)) return [];
  const html = fs.readFileSync(filename, 'utf8');
  
  // Find all sections or major blocks
  const sections = [];
  const sectionRegex = /<section[\s\S]*?<\/section>/gi;
  let match;
  while ((match = sectionRegex.exec(html)) !== null) {
    const sHtml = match[0];
    const idMatch = sHtml.match(/id=["']([^"']+)["']/i);
    const classMatch = sHtml.match(/class=["']([^"']+)["']/i);
    const hMatches = [...sHtml.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
    sections.push({
      id: idMatch ? idMatch[1] : null,
      class: classMatch ? classMatch[1] : null,
      headings: hMatches,
      length: sHtml.length,
      sampleText: sHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200)
    });
  }
  return sections;
}

['index.html', 'services.html', 'pricing.html', 'case-studies.html', 'our-work.html', 'contact.html'].forEach(file => {
  console.log(`\n=================== ${file} SECTIONS ===================`);
  const secs = inspectSections(file);
  console.log(`Found ${secs.length} sections in ${file}:`);
  secs.forEach((s, i) => {
    console.log(`  [${i + 1}] ID: ${s.id || 'none'} | Headings: ${s.headings.join(' -> ')}`);
  });
});

