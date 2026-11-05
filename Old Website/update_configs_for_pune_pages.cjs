const fs = require('fs');

// 1. Update vite.config.ts
let viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
if (!viteConfig.includes('website-design-company-in-pune')) {
  viteConfig = viteConfig.replace(
    "contact: path.resolve(__dirname, 'contact.html'),",
    `contact: path.resolve(__dirname, 'contact.html'),
          webDesignPune: path.resolve(__dirname, 'website-design-company-in-pune.html'),
          digitalMarketingPune: path.resolve(__dirname, 'digital-marketing-agency-in-pune.html'),`
  );
  fs.writeFileSync('vite.config.ts', viteConfig, 'utf8');
  console.log('Registered in vite.config.ts');
}

// 2. Update server.ts
let serverTs = fs.readFileSync('server.ts', 'utf8');
if (!serverTs.includes('website-design-company-in-pune')) {
  const insertIndex = serverTs.indexOf('// Serve frontend with Vite middleware in dev or as static files in production');
  const routes = `// Explicit direct routes for Pune Local Power Hubs
app.get(["/website-design-company-in-pune", "/website-design-company-in-pune.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "website-design-company-in-pune.html");
  const localPage = path.join(process.cwd(), "website-design-company-in-pune.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});

app.get(["/digital-marketing-agency-in-pune", "/digital-marketing-agency-in-pune.html"], (req, res) => {
  const distPage = path.join(process.cwd(), "dist", "digital-marketing-agency-in-pune.html");
  const localPage = path.join(process.cwd(), "digital-marketing-agency-in-pune.html");
  if (fs.existsSync(distPage)) return res.sendFile(distPage);
  if (fs.existsSync(localPage)) return res.sendFile(localPage);
  return res.sendFile(path.join(process.cwd(), "index.html"));
});

`;
  serverTs = serverTs.slice(0, insertIndex) + routes + serverTs.slice(insertIndex);
  fs.writeFileSync('server.ts', serverTs, 'utf8');
  console.log('Registered in server.ts');
}

// 3. Update public/sitemap.xml
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
if (!sitemap.includes('website-design-company-in-pune.html')) {
  const target = `  <url>
    <loc>https://inranktech.com/contact.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>`;
  const replacement = `${target}
  <url>
    <loc>https://inranktech.com/website-design-company-in-pune.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://inranktech.com/digital-marketing-agency-in-pune.html</loc>
    <lastmod>2026-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`;
  sitemap = sitemap.replace(target, replacement);
  fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
  console.log('Registered in public/sitemap.xml');
}
