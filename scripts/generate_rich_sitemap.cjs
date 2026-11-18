/**
 * scripts/generate_rich_sitemap.cjs
 * Generates an authoritative, valid Google XML Sitemap with dedicated
 * Google Image SEO nodes (<image:image>) for all 92 production URLs.
 * All third-party video nodes have been completely removed to protect
 * Inrank's brand entity and topic relevancy.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://inranktech.com';
const TODAY = '2026-11-18';
const rootDir = path.resolve(__dirname, '..');

// Helper to escape XML special characters
function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Extract images from HTML file
function getPageImages(filePath, pageType, slug) {
  if (!fs.existsSync(filePath)) return [];
  const html = fs.readFileSync(filePath, 'utf8');
  const images = [];
  const seenLocs = new Set();

  function addImage(loc, title, caption) {
    if (!loc) return;
    // Normalize relative paths
    let fullLoc = loc;
    if (loc.startsWith('/')) {
      fullLoc = `${DOMAIN}${loc}`;
    } else if (!loc.startsWith('http')) {
      fullLoc = `${DOMAIN}/${loc}`;
    }

    // Filter out external tracking pixels or 3rd party badges
    if (!fullLoc.startsWith(DOMAIN)) return;
    if (seenLocs.has(fullLoc)) return;
    seenLocs.add(fullLoc);

    images.push({
      loc: fullLoc,
      title: title || 'Inrank Technologies Pune Digital Growth Platform',
      caption: caption || title || 'Inrank Technologies Web Development and Performance Growth'
    });
  }

  // 1. Primary Inrank Brand Logos
  addImage('/img/inrank-dark-logo.svg', 'Inrank Technologies Corporate Logo', 'Official vector brandmark of Inrank Technologies Pvt Ltd Pune');
  addImage('/img/inrank-white-logo.svg', 'Inrank Technologies Dark Mode Logo', 'Official white vector brandmark of Inrank Technologies Pvt Ltd Pune');

  // 2. Extract <img> tags
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const src = match[1];

    // Extract alt text
    const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
    const altText = altMatch ? altMatch[1].trim() : '';

    // Extract title text if present
    const titleMatch = fullTag.match(/title=["']([^"']*)["']/i);
    const titleText = titleMatch ? titleMatch[1].trim() : altText;

    if (src && !src.includes('data:image') && !src.includes('google.com') && !src.includes('facebook.com')) {
      addImage(src, titleText || `${slug} visual asset`, altText || `Inrank Technologies ${slug} portfolio showcase`);
    }
  }

  // 3. Extract OpenGraph image
  const ogMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (ogMatch && ogMatch[1]) {
    const pageTitleMatch = html.match(/<title>([^<]+)<\/title>/i);
    const pageTitle = pageTitleMatch ? pageTitleMatch[1].split('|')[0].trim() : slug;
    addImage(ogMatch[1], pageTitle, `${pageTitle} - Visual preview for Inrank Technologies`);
  }

  // Limit images per URL to top 8 highest quality images to prevent sitemap bloat
  return images.slice(0, 8);
}

// Build URL items
const urlItems = [];

// 1. Homepage
urlItems.push({
  loc: `${DOMAIN}/`,
  priority: '1.0',
  changefreq: 'daily',
  pageType: 'home',
  filePath: path.join(rootDir, 'index.html')
});

// 2. High-Intent Pune Local Landing Pages
urlItems.push({
  loc: `${DOMAIN}/website-design-company-in-pune.html`,
  priority: '0.95',
  changefreq: 'daily',
  pageType: 'local',
  filePath: path.join(rootDir, 'website-design-company-in-pune.html')
});
urlItems.push({
  loc: `${DOMAIN}/digital-marketing-agency-in-pune.html`,
  priority: '0.95',
  changefreq: 'daily',
  pageType: 'local',
  filePath: path.join(rootDir, 'digital-marketing-agency-in-pune.html')
});

// 3. Core Hub Pages
const coreHubs = [
  { file: 'about.html', priority: '0.90', changefreq: 'weekly' },
  { file: 'services.html', priority: '0.90', changefreq: 'weekly' },
  { file: 'pricing.html', priority: '0.90', changefreq: 'weekly' },
  { file: 'our-work.html', priority: '0.90', changefreq: 'weekly' },
  { file: 'case-studies.html', priority: '0.90', changefreq: 'weekly' },
  { file: 'blog.html', priority: '0.85', changefreq: 'daily' },
  { file: 'contact.html', priority: '0.80', changefreq: 'monthly' },
  { file: 'privacy-policy.html', priority: '0.30', changefreq: 'monthly' },
  { file: 'terms-and-conditions.html', priority: '0.30', changefreq: 'monthly' }
];

coreHubs.forEach(h => {
  urlItems.push({
    loc: `${DOMAIN}/${h.file}`,
    priority: h.priority,
    changefreq: h.changefreq,
    pageType: 'hub',
    filePath: path.join(rootDir, h.file)
  });
});

// 4. All 27 Service Pages
const servicesDir = path.join(rootDir, 'services');
const serviceFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.html')).sort();
serviceFiles.forEach(f => {
  urlItems.push({
    loc: `${DOMAIN}/services/${f}`,
    priority: '0.85',
    changefreq: 'weekly',
    pageType: 'service',
    filePath: path.join(servicesDir, f)
  });
});

// 5. All 10 Our Work Pages
const workDir = path.join(rootDir, 'our-work');
const workFiles = fs.readdirSync(workDir).filter(f => f.endsWith('.html')).sort();
workFiles.forEach(f => {
  urlItems.push({
    loc: `${DOMAIN}/our-work/${f}`,
    priority: '0.80',
    changefreq: 'weekly',
    pageType: 'work',
    filePath: path.join(workDir, f)
  });
});

// 6. All 10 Case Study Pages
const caseDir = path.join(rootDir, 'case-studies');
const caseFiles = fs.readdirSync(caseDir).filter(f => f.endsWith('.html')).sort();
caseFiles.forEach(f => {
  urlItems.push({
    loc: `${DOMAIN}/case-studies/${f}`,
    priority: '0.80',
    changefreq: 'weekly',
    pageType: 'case',
    filePath: path.join(caseDir, f)
  });
});

// 7. All 33 Blog Articles
const blogDir = path.join(rootDir, 'blog');
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.html')).sort();
blogFiles.forEach(f => {
  urlItems.push({
    loc: `${DOMAIN}/blog/${f}`,
    priority: '0.75',
    changefreq: 'monthly',
    pageType: 'blog',
    filePath: path.join(blogDir, f)
  });
});

console.log(`Processing ${urlItems.length} URLs for Rich Image Sitemap...`);

let totalImages = 0;

const xmlEntries = urlItems.map(item => {
  const images = getPageImages(item.filePath, item.pageType, path.basename(item.filePath, '.html'));
  totalImages += images.length;

  let block = `  <url>\n    <loc>${item.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>`;

  // Add Image SEO nodes
  if (images.length > 0) {
    images.forEach(img => {
      block += `\n    <image:image>\n      <image:loc>${escapeXml(img.loc)}</image:loc>\n      <image:title>${escapeXml(img.title)}</image:title>\n      <image:caption>${escapeXml(img.caption)}</image:caption>\n    </image:image>`;
    });
  }

  block += `\n  </url>`;
  return block;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${xmlEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
const distPath = path.join(rootDir, 'dist', 'sitemap.xml');
if (fs.existsSync(path.dirname(distPath))) {
  fs.writeFileSync(distPath, sitemapXml, 'utf8');
}

console.log(`Rich Image Sitemap generated successfully!`);
console.log(`- Total URLs: ${urlItems.length}`);
console.log(`- Total Image SEO Nodes: ${totalImages}`);
console.log(`- All third-party video nodes removed.`);
