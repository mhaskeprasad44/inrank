const fs = require('fs');

function inspectPage(filename) {
  const filepath = `awrange_pages/${filename}`;
  if (!fs.existsSync(filepath)) {
    console.log(`File not found: ${filepath}`);
    return;
  }
  const html = fs.readFileSync(filepath, 'utf8');
  console.log(`\n================= ${filename} =================`);
  
  // Title & Meta
  const title = (html.match(/<title[^>]*>(.*?)<\/title>/is) || [])[1];
  const desc = (html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/is) || [])[1];
  console.log('Title:', title);
  console.log('Description:', desc);

  // Headings
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H1:', h1);
  console.log(`H2s (${h2.length}):`, h2.slice(0, 10));

  // Word count approx
  const bodyText = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const words = bodyText.split(/\s+/).filter(Boolean).length;
  console.log('Approx word count:', words);

  // Schema types
  const schemas = [...html.matchAll(/<script type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  console.log(`Schemas count: ${schemas.length}`);
  schemas.forEach((s, idx) => {
    try {
      const p = JSON.parse(s);
      const types = p['@type'] || (p['@graph'] ? p['@graph'].map(g => g['@type']) : 'custom');
      console.log(`  Schema #${idx+1}:`, types);
    } catch (e) {}
  });

  // FAQs
  const faqs = [...html.matchAll(/<details[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`FAQ questions (${faqs.length}):`, faqs.slice(0, 6));
}

inspectPage('digital-marketing-agency-in-pune.html');
inspectPage('web-designing-company-in-pune.html');
inspectPage('services_ai-seo-agency-pune.html');
inspectPage('services_geo-seo-agency-pune.html');
