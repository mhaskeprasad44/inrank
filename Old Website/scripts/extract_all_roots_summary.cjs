const fs = require('fs');
const path = require('path');

const files = [
  'cytos.html',
  'fludio.html',
  'hiragrafix.html',
  'greytothegreen.html',
  'vasroventures.html',
  'hcpnest.html',
  'riituinstitution.html',
  'shetkarifoodstuff.html',
  'orthopedicanklefootspecialist.html',
  'dravyafinancial.html'
];

const results = {};

files.forEach(f => {
  const p = path.join('our-work', f);
  if (!fs.existsSync(p)) {
    results[f] = 'FILE NOT FOUND IN ROOT our-work';
    return;
  }
  const content = fs.readFileSync(p, 'utf8');
  
  // Title & Subtitle
  const h1 = (content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  const sub = (content.match(/class="[^"]*text-emerald-700[^"]*"[^>]*>([\s\S]*?)<\/p>/) || [])[1];
  
  // Client & Location & Industry from meta spec bar
  const client = (content.match(/Client &amp; City<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/) || content.match(/Client &amp; Location<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/) || [])[1];
  const industry = (content.match(/Industry &amp; Domain<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/) || content.match(/Industry<\/span>[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/) || [])[1];
  const website = (content.match(/href="(https?:\/\/[^"]+)"[^>]*>Visit Live/i) || content.match(/href="(https?:\/\/[^"]+)"/i) || [])[1];
  
  // About / Challenge / Solution
  const aboutIdx = content.indexOf('About The Project &amp; Background') !== -1 ? content.indexOf('About The Project &amp; Background') : content.indexOf('About');
  const aboutSnippet = aboutIdx !== -1 ? content.slice(aboutIdx, aboutIdx + 600).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ') : 'N/A';
  
  results[f] = {
    h1: h1 ? h1.replace(/<[^>]+>/g, '').trim() : 'N/A',
    sub: sub ? sub.replace(/<[^>]+>/g, '').trim() : 'N/A',
    client: client ? client.replace(/<[^>]+>/g, '').trim() : 'N/A',
    industry: industry ? industry.replace(/<[^>]+>/g, '').trim() : 'N/A',
    website,
    aboutSnippet
  };
});

console.log(JSON.stringify(results, null, 2));

