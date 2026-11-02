const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. The 10 case study slugs
const caseStudySlugs = [
  'cytos',
  'dravyafinancial',
  'fludio',
  'greytothegreen',
  'hcpnest',
  'hiragrafix',
  'orthopedicanklefootspecialist',
  'riituinstitution',
  'shetkarifoodstuff',
  'vasroventures'
];

console.log('--- 1. Updating case-studies/*.html ---');
for (const slug of caseStudySlugs) {
  const filePath = path.join(rootDir, 'case-studies', `${slug}.html`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace canonical to self
  content = content.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="https://www.inranktech.com/case-studies/${slug}.html" />`
  );

  // Remove noindex robots tag
  content = content.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>\s*/gi, '');

  // Update og:url and twitter:url
  content = content.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="og:url" content="https://www.inranktech.com/case-studies/${slug}.html" />`
  );
  content = content.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="twitter:url" content="https://www.inranktech.com/case-studies/${slug}.html" />`
  );

  // Update schema urls if pointing to our-work
  content = content.replace(
    new RegExp(`https://www.inranktech.com/our-work/${slug}.html`, 'g'),
    `https://www.inranktech.com/case-studies/${slug}.html`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated case-studies/${slug}.html`);
}

console.log('--- 2. Updating portfolio.html, homepage-2.html, homepage-3.html ---');
// portfolio.html
if (fs.existsSync(path.join(rootDir, 'portfolio.html'))) {
  let content = fs.readFileSync(path.join(rootDir, 'portfolio.html'), 'utf8');
  content = content.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="https://www.inranktech.com/portfolio.html" />`
  );
  content = content.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>\s*/gi, '');
  content = content.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="og:url" content="https://www.inranktech.com/portfolio.html" />`
  );
  content = content.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="twitter:url" content="https://www.inranktech.com/portfolio.html" />`
  );
  fs.writeFileSync(path.join(rootDir, 'portfolio.html'), content, 'utf8');
  console.log('Updated portfolio.html');
}

// homepage-2.html
if (fs.existsSync(path.join(rootDir, 'homepage-2.html'))) {
  let content = fs.readFileSync(path.join(rootDir, 'homepage-2.html'), 'utf8');
  content = content.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="https://www.inranktech.com/homepage-2.html" />`
  );
  content = content.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>\s*/gi, '');
  content = content.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="og:url" content="https://www.inranktech.com/homepage-2.html" />`
  );
  content = content.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="twitter:url" content="https://www.inranktech.com/homepage-2.html" />`
  );
  fs.writeFileSync(path.join(rootDir, 'homepage-2.html'), content, 'utf8');
  console.log('Updated homepage-2.html');
}

// homepage-3.html
if (fs.existsSync(path.join(rootDir, 'homepage-3.html'))) {
  let content = fs.readFileSync(path.join(rootDir, 'homepage-3.html'), 'utf8');
  content = content.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi,
    `<link rel="canonical" href="https://www.inranktech.com/homepage-3.html" />`
  );
  content = content.replace(/<meta\s+name="robots"\s+content="[^"]*"\s*\/?>\s*/gi, '');
  content = content.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="og:url" content="https://www.inranktech.com/homepage-3.html" />`
  );
  content = content.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/gi,
    `<meta property="twitter:url" content="https://www.inranktech.com/homepage-3.html" />`
  );
  fs.writeFileSync(path.join(rootDir, 'homepage-3.html'), content, 'utf8');
  console.log('Updated homepage-3.html');
}

// 3. Update .htaccess & public/.htaccess (remove redirects for portfolio and case-studies)
console.log('--- 3. Updating .htaccess ---');
for (const htPath of [path.join(rootDir, '.htaccess'), path.join(rootDir, 'public', '.htaccess')]) {
  if (fs.existsSync(htPath)) {
    let ht = fs.readFileSync(htPath, 'utf8');
    ht = ht.replace(/RewriteRule \^portfolio\(\\?\.html\)\?\$ \/our-work\.html \[R=301,L\]\r?\n?/g, '');
    ht = ht.replace(/RewriteRule \^case-studies\/\(\.\+\)\\?\.html\$ \/our-work\/\$1\.html \[R=301,L\]\r?\n?/g, '');
    ht = ht.replace(/RewriteRule \^case-studies\/\(\.\+\)\$ \/our-work\/\$1\.html \[R=301,L\]\r?\n?/g, '');
    fs.writeFileSync(htPath, ht, 'utf8');
    console.log(`Updated ${htPath}`);
  }
}

// 4. Update server.ts
console.log('--- 4. Updating server.ts ---');
const serverTsPath = path.join(rootDir, 'server.ts');
let serverTs = fs.readFileSync(serverTsPath, 'utf8');

// Replace portfolio redirect with serving portfolio.html
const oldPortfolioRoute = `app.get(["/portfolio", "/portfolio.html"], (req, res) => {\n  return res.redirect(301, "/our-work.html");\n});`;
const newPortfolioRoute = `app.get(["/portfolio", "/portfolio.html"], (req, res) => {\n  const distPort = path.join(process.cwd(), "dist", "portfolio.html");\n  const localPort = path.join(process.cwd(), "portfolio.html");\n  if (fs.existsSync(distPort)) return res.sendFile(distPort);\n  if (fs.existsSync(localPort)) return res.sendFile(localPort);\n  return res.redirect(301, "/our-work.html");\n});`;

serverTs = serverTs.replace(oldPortfolioRoute, newPortfolioRoute);

// Replace case-studies/:id redirect with serving case-studies/:id.html
const oldCaseStudiesRoute = `app.get(["/case-studies/:id", "/case-studies/:id.html"], (req, res) => {\n  const rawId = req.params.id.replace(/\\.html$/, "");\n  return res.redirect(301, \`/our-work/\${rawId}.html\`);\n});`;
const newCaseStudiesRoute = `app.get(["/case-studies/:id", "/case-studies/:id.html"], (req, res) => {\n  const rawId = req.params.id.replace(/\\.html$/, "");\n  const candidates = [\n    path.join(process.cwd(), "dist", "case-studies", \`\${rawId}.html\`),\n    path.join(process.cwd(), "case-studies", \`\${rawId}.html\`),\n  ];\n  for (const c of candidates) {\n    if (fs.existsSync(c)) return res.sendFile(c);\n  }\n  return res.redirect(301, \`/our-work/\${rawId}.html\`);\n});`;

serverTs = serverTs.replace(oldCaseStudiesRoute, newCaseStudiesRoute);
fs.writeFileSync(serverTsPath, serverTs, 'utf8');
console.log('Updated server.ts');

console.log('Completed step 1-4.');
