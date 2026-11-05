const fs = require('fs');

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

let fullDump = '';

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  fullDump += `\n################################################################################\n`;
  fullDump += `FILE: ${f}\n`;
  fullDump += `################################################################################\n`;

  // Head details
  const title = c.match(/<title>([\s\S]*?)<\/title>/);
  const metaDesc = c.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  const canonical = c.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  fullDump += `Title: ${title ? title[1].trim() : ''}\n`;
  fullDump += `Meta: ${metaDesc ? metaDesc[1].trim() : ''}\n`;
  fullDump += `Canonical: ${canonical ? canonical[1].trim() : ''}\n\n`;

  // JSON-LD scripts
  const jsonLd = c.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (jsonLd) {
    fullDump += `JSON-LD blocks (${jsonLd.length}):\n`;
    jsonLd.forEach((j, idx) => {
      fullDump += `  [${idx}]: ${j.replace(/\s+/g, ' ').slice(0, 200)}...\n`;
    });
  } else {
    fullDump += `NO JSON-LD!\n`;
  }
  fullDump += `\n`;

  // Sections
  const sections = c.match(/<section[\s\S]*?<\/section>/g) || [];
  sections.forEach((s, idx) => {
    fullDump += `--- SECTION ${idx} ---\n`;
    const clean = s.replace(/<script[\s\S]*?<\/script>/g, '')
                   .replace(/<style[\s\S]*?<\/style>/g, '')
                   .replace(/<[^>]+>/g, ' ')
                   .replace(/\s+/g, ' ')
                   .trim();
    fullDump += `${clean}\n\n`;
  });
});

fs.writeFileSync('scripts/portfolio_full_dump.txt', fullDump, 'utf8');
console.log('Saved scripts/portfolio_full_dump.txt, size:', fullDump.length);

