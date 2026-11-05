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

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  console.log('====================================================');
  console.log('FILE:', f);
  // Match section 2 (Challenge & Solution)
  const sec2Match = c.match(/<h2[^>]*>The Commercial Challenge[\s\S]*?<\/section>/);
  if (sec2Match) {
    const text = sec2Match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('CHALLENGE & SOLUTION TEXT:');
    console.log(text.slice(0, 400));
  } else {
    console.log('No Challenge section matched');
  }

  // Match section 3 (Scope of Architecture Deployed)
  const sec3Match = c.match(/<h2[^>]*>Scope of Architecture[\s\S]*?<\/section>/);
  if (sec3Match) {
    const text = sec3Match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('SCOPE OF ARCHITECTURE TEXT:');
    console.log(text.slice(0, 400));
  } else {
    console.log('No Scope section matched');
  }
});

