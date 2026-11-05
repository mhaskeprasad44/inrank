const fs = require('fs');

const raw = fs.readFileSync('services.html', 'utf8');

// Extract all 4 pillars
const pillar1Start = raw.indexOf('id="pillar-1"');
const pillar2Start = raw.indexOf('id="pillar-2"');
const pillar3Start = raw.indexOf('id="pillar-3"');
const pillar4Start = raw.indexOf('id="pillar-4"');
const guaranteesStart = raw.indexOf('Why Ambitious Brands Choose Inrank');
const guaranteesEnd = raw.indexOf('</section>', guaranteesStart) + 10;
const ctaStart = raw.indexOf('Need a unified web &amp; growth campaign?');
const ctaSection = raw.slice(raw.lastIndexOf('<section', ctaStart), raw.indexOf('</section>', ctaStart) + 10);

// Extract the 4 pillar section HTMLs
const p1Html = raw.slice(raw.lastIndexOf('<section', pillar1Start), pillar2Start);
const p2Html = raw.slice(raw.lastIndexOf('<section', pillar2Start), pillar3Start);
const p3Html = raw.slice(raw.lastIndexOf('<section', pillar3Start), pillar4Start);
const p4Html = raw.slice(raw.lastIndexOf('<section', pillar4Start), raw.indexOf('</section>', pillar4Start) + 10);

console.log('Pillar 1 len:', p1Html.length);
console.log('Pillar 2 len:', p2Html.length);
console.log('Pillar 3 len:', p3Html.length);
console.log('Pillar 4 len:', p4Html.length);
console.log('Guarantees len:', (guaranteesEnd - guaranteesStart));
console.log('CTA len:', ctaSection.length);

fs.writeFileSync('scripts/extracted_pillars.json', JSON.stringify({
  p1: p1Html,
  p2: p2Html,
  p3: p3Html,
  p4: p4Html,
  cta: ctaSection
}, null, 2));
console.log('Extracted pillars written to scripts/extracted_pillars.json');

