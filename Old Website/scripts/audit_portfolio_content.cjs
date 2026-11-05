const fs = require('fs');
const path = require('path');

const files = [
  'inrank2.0/our-work/dravyafinancial.html',
  'inrank2.0/our-work/greytothegreen.html',
  'inrank2.0/our-work/cytos.html',
  'inrank2.0/our-work/fludio.html',
  'inrank2.0/our-work/hcpnest.html',
  'inrank2.0/our-work/hiragrafix.html',
  'inrank2.0/our-work/orthopedicanklefootspecialist.html',
  'inrank2.0/our-work/riituinstitution.html',
  'inrank2.0/our-work/shetkarifoodstuff.html',
  'inrank2.0/our-work/vasroventures.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('========================================');
  console.log('FILE:', f);
  const title = c.match(/<title>([\s\S]*?)<\/title>/);
  const metaDesc = c.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  console.log('Title:', title ? title[1].trim() : 'NONE');
  console.log('Meta Desc:', metaDesc ? metaDesc[1].trim() : 'NONE');

  // Find all sections in main
  const mainIdx = c.indexOf('<main');
  const mainContent = c.substring(mainIdx);

  // Extract all h1, h2, h3
  const headings = [];
  const hRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = hRegex.exec(mainContent)) !== null) {
    // strip tags
    const text = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    headings.push(`${m[1].toUpperCase()}: ${text}`);
  }
  console.log('Headings:', headings);

  // Check metrics strip
  const metricValues = [];
  const strongRegex = /<strong[^>]*>([\s\S]*?)<\/strong>/g;
  let sm;
  // Look only within first section after hero
  const sec1 = mainContent.split('</section>')[1] || '';
  while ((sm = strongRegex.exec(sec1)) !== null) {
    metricValues.push(sm[1].replace(/<[^>]+>/g, '').trim());
  }
  console.log('Metric strip strongs:', metricValues);
});

