const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const TODAY = '2026-11-18';
const DOMAIN = 'https://inranktech.com';

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function resolveAssetUrl(src) {
  if (!src) return null;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  const clean = src.startsWith('/') ? src : '/' + src;
  return `${DOMAIN}${clean}`;
}

// Extract primary high-value images from an HTML file
function getPageImages(filePath, pageType, slug) {
  const content = fs.readFileSync(filePath, 'utf8');
  const images = [];
  const seenUrls = new Set();

  function addImage(url, title, caption) {
    const fullUrl = resolveAssetUrl(url);
    if (!fullUrl || seenUrls.has(fullUrl)) return;
    seenUrls.add(fullUrl);
    images.push({
      loc: fullUrl,
      title: title || 'Inrank Technologies Web Engineering Pune',
      caption: caption || 'Inrank Technologies performance web development, SEO and digital growth engineering in Baner, Pune'
    });
  }

  // Always include primary branding if it's a hub or local landing page
  if (pageType === 'home' || pageType === 'hub' || pageType === 'local') {
    addImage('/Logo.png', 'Inrank Technologies Logo - Performance Web Development Company in Pune', 'Inrank Technologies corporate brand identity and growth engineering lab in Baner, Pune');
  }

  // Extract from HTML <img> tags that are meaningful content images
  const imgRegex = /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    const src = m[1];
    if (src.startsWith('data:') || src.includes('favicon') || src.includes('logo-icon')) continue;

    const altMatch = m[0].match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1].trim() : '';

    const titleMatch = m[0].match(/title=["']([^"']*)["']/i);
    const title = titleMatch ? titleMatch[1].trim() : (alt || 'Inrank Technologies Asset');

    // Filter out minor tech icons if we already have main hero/diagrams
    if (src.includes('/images/') || src.includes('/portfolio/') || src.includes('client-logos') || src.includes('pune-tech-hub')) {
      let caption = alt || title;
      if (!caption || caption.length < 10) {
        caption = `${title} - Inrank Technologies high-performance digital solutions in Pune`;
      }
      addImage(src, title, caption);
    }
  }

  // Extract og:image if present
  const ogMatch = content.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
  if (ogMatch) {
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    const pageTitle = titleMatch ? titleMatch[1].trim() : 'Inrank Technologies';
    addImage(ogMatch[1], pageTitle, `${pageTitle} - Visual preview for Inrank Technologies`);
  }

  // Limit images per URL to top 8 highest quality images to prevent sitemap bloat
  return images.slice(0, 8);
}

// Client engineering videos for video SEO
const cytosVideos = [
  {
    thumbnail_loc: 'https://img.youtube.com/vi/Wc9UoQiWpxI/hqdefault.jpg',
    title: 'High Accuracy Mini Milling Machine - CyTOS Pune CNC Automation',
    description: 'TITAN machining process for soft and hard metals and non-metals (metallic die, plastic, FR4, nylon, wood, brass, aluminium). Manufactured by CyTOS Pune with digital platform engineered by Inrank Technologies.',
    content_loc: 'https://www.youtube.com/watch?v=Wc9UoQiWpxI',
    player_loc: 'https://www.youtube.com/embed/Wc9UoQiWpxI',
    duration: 132,
    publication_date: '2026-10-01T00:00:00+05:30'
  },
  {
    thumbnail_loc: 'https://img.youtube.com/vi/VFu1gzPGcH0/hqdefault.jpg',
    title: 'Automatic Thermal Foam Welding Machine - CyTOS Industrial Automation',
    description: 'Thermal fusion foam welding machine with 700x700mm platen. Welds 10mm to 250mm thick EPE/EVA/XLPE foam in seconds with 100% glue-free molecular bonding. Web architecture by Inrank Technologies.',
    content_loc: 'https://www.youtube.com/watch?v=VFu1gzPGcH0',
    player_loc: 'https://www.youtube.com/embed/VFu1gzPGcH0',
    duration: 83,
    publication_date: '2026-10-01T00:00:00+05:30'
  },
  {
    thumbnail_loc: 'https://img.youtube.com/vi/vvbIlXhe4BE/hqdefault.jpg',
    title: 'High Speed Industrial PCB Drilling Machine - CyTOS Production Platform',
    description: 'Commercial PCB manufacturing machine with pneumatic ATC and high-speed micro-drilling up to 160 hits/min on multilayer panels. Deployed by Inrank Technologies.',
    content_loc: 'https://www.youtube.com/watch?v=vvbIlXhe4BE',
    player_loc: 'https://www.youtube.com/embed/vvbIlXhe4BE',
    duration: 101,
    publication_date: '2026-10-01T00:00:00+05:30'
  },
  {
    thumbnail_loc: 'https://img.youtube.com/vi/5qZVqYg9CYc/hqdefault.jpg',
    title: 'Chemical-Free PCB Prototyping Machine - Laboratory CNC Demonstration',
    description: 'Compact 100% chemical-free rapid prototyper for research labs and colleges with auto-leveling surface height compensation. Case study on Inrank Technologies.',
    content_loc: 'https://www.youtube.com/watch?v=5qZVqYg9CYc',
    player_loc: 'https://www.youtube.com/embed/5qZVqYg9CYc',
    duration: 119,
    publication_date: '2026-10-01T00:00:00+05:30'
  }
];

// Build URL items
const urlItems = [];

// 1. Homepage
urlItems.push({
  loc: `${DOMAIN}/`,
  priority: '1.0',
  changefreq: 'daily',
  pageType: 'home',
  filePath: path.join(rootDir, 'index.html'),
  videos: cytosVideos.slice(0, 2)
});

// 2. High-Intent Pune Local Landing Pages
urlItems.push({
  loc: `${DOMAIN}/website-design-company-in-pune.html`,
  priority: '0.95',
  changefreq: 'daily',
  pageType: 'local',
  filePath: path.join(rootDir, 'website-design-company-in-pune.html'),
  videos: []
});
urlItems.push({
  loc: `${DOMAIN}/digital-marketing-agency-in-pune.html`,
  priority: '0.95',
  changefreq: 'daily',
  pageType: 'local',
  filePath: path.join(rootDir, 'digital-marketing-agency-in-pune.html'),
  videos: []
});

// 3. Core Hub Pages
const coreHubs = [
  { file: 'about.html', priority: '0.90', changefreq: 'weekly', videos: [] },
  { file: 'services.html', priority: '0.90', changefreq: 'weekly', videos: [] },
  { file: 'pricing.html', priority: '0.90', changefreq: 'weekly', videos: [] },
  { file: 'our-work.html', priority: '0.90', changefreq: 'weekly', videos: cytosVideos.slice(0, 2) },
  { file: 'case-studies.html', priority: '0.90', changefreq: 'weekly', videos: cytosVideos.slice(0, 2) },
  { file: 'blog.html', priority: '0.85', changefreq: 'daily', videos: [] },
  { file: 'contact.html', priority: '0.80', changefreq: 'monthly', videos: [] },
  { file: 'privacy-policy.html', priority: '0.30', changefreq: 'monthly', videos: [] },
  { file: 'terms-and-conditions.html', priority: '0.30', changefreq: 'monthly', videos: [] }
];

coreHubs.forEach(h => {
  urlItems.push({
    loc: `${DOMAIN}/${h.file}`,
    priority: h.priority,
    changefreq: h.changefreq,
    pageType: 'hub',
    filePath: path.join(rootDir, h.file),
    videos: h.videos
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
    filePath: path.join(servicesDir, f),
    videos: []
  });
});

// 5. All 10 Our Work Pages
const workDir = path.join(rootDir, 'our-work');
const workFiles = fs.readdirSync(workDir).filter(f => f.endsWith('.html')).sort();
workFiles.forEach(f => {
  const isCytos = f === 'cytos.html';
  urlItems.push({
    loc: `${DOMAIN}/our-work/${f}`,
    priority: '0.80',
    changefreq: 'weekly',
    pageType: 'work',
    filePath: path.join(workDir, f),
    videos: isCytos ? cytosVideos : []
  });
});

// 6. All 10 Case Study Pages
const caseDir = path.join(rootDir, 'case-studies');
const caseFiles = fs.readdirSync(caseDir).filter(f => f.endsWith('.html')).sort();
caseFiles.forEach(f => {
  const isCytos = f === 'cytos.html';
  urlItems.push({
    loc: `${DOMAIN}/case-studies/${f}`,
    priority: '0.80',
    changefreq: 'weekly',
    pageType: 'case',
    filePath: path.join(caseDir, f),
    videos: isCytos ? cytosVideos : []
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
    filePath: path.join(blogDir, f),
    videos: []
  });
});

console.log(`Processing ${urlItems.length} URLs for Rich Image & Video Sitemap...`);

let totalImages = 0;
let totalVideos = 0;

const xmlEntries = urlItems.map(item => {
  const images = getPageImages(item.filePath, item.pageType, path.basename(item.filePath, '.html'));
  totalImages += images.length;
  totalVideos += (item.videos || []).length;

  let block = `  <url>\n    <loc>${item.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>`;

  // Add Image SEO nodes
  if (images.length > 0) {
    images.forEach(img => {
      block += `\n    <image:image>\n      <image:loc>${escapeXml(img.loc)}</image:loc>\n      <image:title>${escapeXml(img.title)}</image:title>\n      <image:caption>${escapeXml(img.caption)}</image:caption>\n    </image:image>`;
    });
  }

  // Add Video SEO nodes
  if (item.videos && item.videos.length > 0) {
    item.videos.forEach(v => {
      block += `\n    <video:video>\n      <video:thumbnail_loc>${escapeXml(v.thumbnail_loc)}</video:thumbnail_loc>\n      <video:title>${escapeXml(v.title)}</video:title>\n      <video:description>${escapeXml(v.description)}</video:description>\n      <video:content_loc>${escapeXml(v.content_loc)}</video:content_loc>\n      <video:player_loc>${escapeXml(v.player_loc)}</video:player_loc>\n      <video:duration>${v.duration}</video:duration>\n      <video:publication_date>${v.publication_date}</video:publication_date>\n      <video:family_friendly>yes</video:family_friendly>\n      <video:uploader info="https://inranktech.com">Inrank Technologies</video:uploader>\n    </video:video>`;
    });
  }

  block += `\n  </url>`;
  return block;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd
        http://www.google.com/schemas/sitemap-video/1.1
        http://www.google.com/schemas/sitemap-video/1.1/sitemap-video.xsd">
${xmlEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Rich Sitemap generated successfully!`);
console.log(`- Total URLs: ${urlItems.length}`);
console.log(`- Total Image SEO Nodes: ${totalImages}`);
console.log(`- Total Video SEO Nodes: ${totalVideos}`);
