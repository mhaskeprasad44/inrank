const fs = require('fs');
const path = require('path');

// Read root our-work.html
if (fs.existsSync('our-work.html')) {
  const content = fs.readFileSync('our-work.html', 'utf8');
  console.log('--- ROOT our-work.html analysis ---');
  const cardMatches = content.match(/<article[\s\S]*?<\/article>/g) || content.match(/class="[^"]*card[^"]*"[\s\S]*?<\/div>/g) || [];
  console.log('Found cards/elements count:', cardMatches.length);
  
  // Look for greytothegreen in root our-work.html
  const gIdx = content.indexOf('greytothegreen');
  if (gIdx !== -1) {
    console.log('greytothegreen snippet in root our-work.html:');
    console.log(content.slice(Math.max(0, gIdx - 200), Math.min(content.length, gIdx + 800)));
  }
}

// Check root our-work directory
if (fs.existsSync('our-work')) {
  const files = fs.readdirSync('our-work').filter(f => f.endsWith('.html'));
  console.log('\n--- ROOT our-work/ files ---:', files);
  files.forEach(f => {
    const txt = fs.readFileSync(path.join('our-work', f), 'utf8');
    const titleMatch = txt.match(/<title>([\s\S]*?)<\/title>/);
    const h1Match = txt.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const categoryMatch = txt.match(/class="[^"]*category[^"]*"[^>]*>([\s\S]*?)<\//i) || txt.match(/class="[^"]*kicker[^"]*"[^>]*>([\s\S]*?)<\//i) || txt.match(/<span[^>]*class="[^"]*badge[^"]*"[^>]*>([\s\S]*?)<\//i);
    console.log(`\n[${f}]:`);
    console.log('  Title:', titleMatch ? titleMatch[1].trim() : 'N/A');
    console.log('  H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'N/A');
    if (categoryMatch) console.log('  Category/Badge:', categoryMatch[1].trim());
  });
}

