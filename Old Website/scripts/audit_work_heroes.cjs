const fs = require('fs');

const files = [
  'inrank2.0/our-work/cytos.html',
  'inrank2.0/our-work/dravyafinancial.html',
  'inrank2.0/our-work/fludio.html',
  'inrank2.0/our-work/greytothegreen.html',
  'inrank2.0/our-work/hcpnest.html',
  'inrank2.0/our-work/hiragrafix.html',
  'inrank2.0/our-work/orthopedicanklefootspecialist.html',
  'inrank2.0/our-work/riituinstitution.html',
  'inrank2.0/our-work/shetkarifoodstuff.html',
  'inrank2.0/our-work/vasroventures.html',
  'inrank2.0/case-studies/cytos.html',
  'inrank2.0/case-studies/dravyafinancial.html',
  'inrank2.0/case-studies/fludio.html',
  'inrank2.0/case-studies/greytothegreen.html',
  'inrank2.0/case-studies/hcpnest.html',
  'inrank2.0/case-studies/hiragrafix.html',
  'inrank2.0/case-studies/orthopedicanklefootspecialist.html',
  'inrank2.0/case-studies/riituinstitution.html',
  'inrank2.0/case-studies/shetkarifoodstuff.html',
  'inrank2.0/case-studies/vasroventures.html'
];

let issues = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const heroMatch = c.match(/<section class="work-hero-split"[\s\S]*?<\/section>/);
  if (!heroMatch) {
    console.error('Missing work-hero-split in:', f);
    issues++;
  } else {
    const hero = heroMatch[0];
    if (hero.includes('eyebrow-pill') || hero.includes('📍') || hero.includes('⚡')) {
      console.error('Found remaining pills in hero of:', f);
      issues++;
    }
  }
});

console.log('Audit complete. Total issues:', issues);

