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

const suspicious = [
  'vinove', 'noida', 'gurgaon', 'lorem', 'ipsum', 'valuecoder', 'pixelcrayon',
  'workstatus', 'invoicera', 'agentra', 'undefined', 'null', 'nan', '[object',
  'sample text', 'placeholder'
];

let foundAny = false;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8').toLowerCase();
  suspicious.forEach(w => {
    if (c.includes(w)) {
      console.log(`Found '${w}' in ${f}`);
      foundAny = true;
    }
  });
});

if (!foundAny) {
  console.log('Zero suspicious terms found across all 20 portfolio pages.');
}

