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

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const hasPills = content.includes('eyebrow-pill');
    const hasHeroSplit = content.includes('work-hero-split');
    console.log(f, 'hasPills:', hasPills, 'hasHeroSplit:', hasHeroSplit);
  }
});

