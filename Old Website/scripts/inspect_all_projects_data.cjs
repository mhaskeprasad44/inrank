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
  'inrank2.0/our-work/vasroventures.html'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const title = c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const p = c.match(/<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/);
  const img = c.match(/<img[^>]*src="([^"]*portfolio\/screenshots[^"]*)"/);
  const url = c.match(/https?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,}/);
  console.log(f, '=> Title:', title ? title[1].trim() : 'MISSING', 'Img:', img ? img[1] : 'MISSING');
});

