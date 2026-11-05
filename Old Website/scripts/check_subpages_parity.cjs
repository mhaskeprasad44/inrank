const fs = require('fs');

function checkPage(name, curFile, v2File) {
  const cur = fs.readFileSync(curFile, 'utf8');
  const v2 = fs.readFileSync(v2File, 'utf8');
  console.log(`\n=================== ${name} ===================`);
  console.log(`Current size: ${cur.length} | v2 size: ${v2.length}`);

  // extract all h2, h3, h4
  const curHeadings = [...cur.matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const v2Headings = [...v2.matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  console.log(`Current headings: ${curHeadings.length}`);
  console.log(`v2 headings: ${v2Headings.length}`);

  let missingHeadings = [];
  curHeadings.forEach(h => {
    // clean h of &amp; etc
    const cleanH = h.replace(/&amp;/g, '&').replace(/&#039;/g, "'").slice(0, 30).toLowerCase();
    const cleanV2 = v2.replace(/&amp;/g, '&').replace(/&#039;/g, "'").toLowerCase();
    if (!cleanV2.includes(cleanH)) {
      missingHeadings.push(h);
    }
  });

  console.log(`Missing headings in v2: ${missingHeadings.length}`);
  if (missingHeadings.length > 0) {
    console.log('Sample missing:', missingHeadings);
  }
}

checkPage('INDEX', 'index.html', 'inrank2.0/index.html');
checkPage('SERVICES', 'services.html', 'inrank2.0/services.html');
checkPage('PRICING', 'pricing.html', 'inrank2.0/pricing.html');
checkPage('CASE STUDIES', 'case-studies.html', 'inrank2.0/case-studies.html');
checkPage('OUR WORK', 'our-work.html', 'inrank2.0/our-work.html');
checkPage('CONTACT', 'contact.html', 'inrank2.0/contact.html');
