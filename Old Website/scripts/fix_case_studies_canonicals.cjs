const fs = require('fs');
const path = require('path');

const csDir = 'inrank2.0/case-studies';
const files = fs.readdirSync(csDir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const full = path.join(csDir, f);
  let content = fs.readFileSync(full, 'utf8');
  const slug = f.replace('.html', '');
  
  // Replace canonical from /our-work/ to /case-studies/
  const targetCanonical = `https://inranktech.com/case-studies/${f}`;
  content = content.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i, `<link rel="canonical" href="${targetCanonical}" />`);
  content = content.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta property="og:url" content="${targetCanonical}" />`);
  content = content.replace(/<meta\s+name=["']twitter:url["']\s+content=["'][^"']*["']\s*\/?>/i, `<meta name="twitter:url" content="${targetCanonical}" />`);
  
  fs.writeFileSync(full, content, 'utf8');
  console.log(`Updated self-canonical in ${full} -> ${targetCanonical}`);
});

