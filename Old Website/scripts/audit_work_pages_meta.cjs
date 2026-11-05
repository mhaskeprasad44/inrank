const fs = require('fs');
const path = require('path');

const files = [
  'greytothegreen.html',
  'vasroventures.html',
  'cytos.html',
  'fludio.html',
  'hiragrafix.html',
  'hcpnest.html',
  'riituinstitution.html',
  'shetkarifoodstuff.html',
  'orthopedicanklefootspecialist.html',
  'dravyafinancial.html'
];

console.log('=== Checking inrank2.0/our-work/*.html ===');
files.forEach(file => {
  const p = path.join('inrank2.0/our-work', file);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  
  // Find category badge or subtitle
  const subtitleMatch = content.match(/<p style="[^"]*clamp[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
  const badgeMatches = content.match(/<span[^>]*class="[^"]*badge[^"]*"[^>]*>([\s\S]*?)<\/span>/gi) || [];
  
  console.log(`\n[${file}]:`);
  console.log('  Subtitle:', subtitleMatch ? subtitleMatch[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
  console.log('  Badges:', badgeMatches.map(b => b.replace(/<[^>]+>/g, '').trim()).join(' | '));
});

