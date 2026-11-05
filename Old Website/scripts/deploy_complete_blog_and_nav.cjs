const fs = require('fs');
const path = require('path');

console.log('=== DEPLOYING COMPLETE BLOG SYSTEM & UPDATING OUR WORK DROPDOWN ===');

const blogs = require('./temp_blogs_data.cjs');
console.log(`Loaded ${blogs.length} blogs from temp_blogs_data.cjs`);

// --------------------------------------------------------------------------
// 1. DEFINE OUR WORK DROPDOWN WITH GREYTOTHEGREEN IN BOX 1 (NO DRAVYA)
// --------------------------------------------------------------------------
const ourWorkDropdownHtml = `<!-- Floating Our Work Dropdown Menu -->
          <div class="nav-drop drop-work" role="region" aria-label="Our Work Submenu">
            <div class="work-dropdown-grid">
              
              <!-- Box 1: Greytothegreen (Replaced Dravya Financial) -->
              <a href="/our-work/greytothegreen.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/greytothegreen.png" alt="Greytothegreen" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Greytothegreen</h4>
                  <span class="work-drop-desc">Landscape architecture portal</span>
                </div>
              </a>

              <!-- Box 2: CyTOS Healthcare -->
              <a href="/our-work/cytos.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/cytos.png" alt="CyTOS Diagnostics" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">CyTOS Diagnostics</h4>
                  <span class="work-drop-desc">Clinical pathology &amp; lab network</span>
                </div>
              </a>

              <!-- Box 3: Shetkari Foodstuff -->
              <a href="/our-work/shetkarifoodstuff.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/shetkari.webp" alt="Shetkari Foodstuff" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Shetkari Foodstuff</h4>
                  <span class="work-drop-desc">Agri-export &amp; D2C storefront</span>
                </div>
              </a>

              <!-- Box 4: Fludio Design -->
              <a href="/our-work/fludio.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/fludio.png" alt="Fludio Design" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Fludio Design</h4>
                  <span class="work-drop-desc">Water solutions &amp; turnkey studio</span>
                </div>
              </a>

              <!-- Box 5: Hira Grafix -->
              <a href="/our-work/hiragrafix.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/hiragrafix.png" alt="Hira Grafix" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Hira Grafix</h4>
                  <span class="work-drop-desc">Precision commercial packaging</span>
                </div>
              </a>

              <!-- Box 6: View All Companies -->
              <a href="/our-work.html" class="work-dropdown-card work-dropdown-card--all">
                <div class="work-drop-all-head">
                  <div class="work-drop-all-brand">
                    <img src="/img/inrank-white-logo.svg" alt="Inrank Technologies" width="22" height="22" />
                    <span class="work-drop-all-title">INRANK</span>
                  </div>
                  <svg class="work-drop-all-arrow" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">View All Case Studies</h4>
                  <span class="work-drop-desc">Explore 50+ Pune &amp; Global client wins</span>
                </div>
              </a>

            </div>
          </div>`;

// --------------------------------------------------------------------------
// 2. UPDATE OUR WORK DROPDOWN AND ADD BLOG TO NAV IN ALL HTML FILES
// --------------------------------------------------------------------------
function getAllHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFilesToUpdate = [
  ...getAllHtmlFiles('inrank2.0'),
  ...fs.readdirSync('.').filter(f => f.endsWith('.html')).map(f => path.resolve(f))
];

console.log(`Found ${htmlFilesToUpdate.length} total HTML files to inspect.`);

let updatedDropdownCount = 0;
let updatedNavBlogCount = 0;

htmlFilesToUpdate.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace Our Work dropdown
  const workDropRegex = /<!-- Floating Our Work Dropdown Menu -->[\s\S]*?<\/div>\s*<\/div>/;
  if (workDropRegex.test(html)) {
    html = html.replace(workDropRegex, ourWorkDropdownHtml);
    changed = true;
    updatedDropdownCount++;
  } else if (html.includes('<div class="work-dropdown-grid">')) {
    const fallbackRegex = /<div class="nav-drop drop-work"[^>]*>[\s\S]*?<\/div>\s*<\/div>/;
    if (fallbackRegex.test(html)) {
      html = html.replace(fallbackRegex, ourWorkDropdownHtml);
      changed = true;
      updatedDropdownCount++;
    }
  }

  // Ensure Desktop Nav Bar contains Blog link (<a href="/blog.html" class="nav-link">Blog</a>)
  if (html.includes('<nav class="nav-links"')) {
    if (!html.includes('href="/blog.html"') && !html.includes('href="/blog"')) {
      // Insert Blog right before Contact
      if (html.includes('<a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>')) {
        html = html.replace(
          '<a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>',
          '<a href="/blog.html" class="nav-link" data-nav="blog">Blog</a>\n        <a href="/contact.html" class="nav-link" data-nav="contact">Contact</a>'
        );
        changed = true;
        updatedNavBlogCount++;
      } else if (html.includes('<a href="/contact.html" class="nav-link">Contact</a>')) {
        html = html.replace(
          '<a href="/contact.html" class="nav-link">Contact</a>',
          '<a href="/blog.html" class="nav-link" data-nav="blog">Blog</a>\n        <a href="/contact.html" class="nav-link">Contact</a>'
        );
        changed = true;
        updatedNavBlogCount++;
      }
    }
  }

  // Ensure Mobile Drawer contains Blog & Playbooks
  if (html.includes('id="mob"') && !html.includes('href="/blog.html"') && !html.includes('class="mob-link">Blog')) {
    if (html.includes('<a href="/contact.html" class="mob-link">Contact</a>')) {
      html = html.replace(
        '<a href="/contact.html" class="mob-link">Contact</a>',
        '<a href="/blog.html" class="mob-link">Blog &amp; Playbooks</a>\n      <a href="/contact.html" class="mob-link">Contact</a>'
      );
      changed = true;
    }
  }

  // Ensure Footer contains Blog link
  if (html.includes('class="site-footer"') && !html.includes('href="/blog.html"')) {
    if (html.includes('<li><a href="/about.html">About Us</a></li>')) {
      html = html.replace(
        '<li><a href="/about.html">About Us</a></li>',
        '<li><a href="/about.html">About Us</a></li>\n            <li><a href="/blog.html">Engineering Blog</a></li>'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
  }
});

console.log(`[OK] Updated Our Work Dropdown in ${updatedDropdownCount} files (Dravya removed, Greytothegreen at Box 1).`);
console.log(`[OK] Added visible Blog link to navigation in ${updatedNavBlogCount} files.`);

// --------------------------------------------------------------------------
// 3. GENERATE AUTHENTIC LIVE-STRUCTURE BLOG HUB (blog.html)
// --------------------------------------------------------------------------
console.log('Generating authentic live-structure Blog Hub...');

// Read the freshly updated index.html for authentic header and footer
const freshIndexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const freshHeader = freshIndexHtml.slice(
  freshIndexHtml.indexOf('<header'),
  freshIndexHtml.indexOf('</header>') + '</header>'.length
);

const mobIdx = freshIndexHtml.indexOf('<div id="mob"');
let depth = 0;
let mobEnd = -1;
for (let i = mobIdx; i < freshIndexHtml.length; i++) {
  if (freshIndexHtml.startsWith('<div', i)) depth++;
  else if (freshIndexHtml.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      mobEnd = i + '</div>'.length;
      break;
    }
  }
}
const freshMobDrawer = freshIndexHtml.slice(mobIdx, mobEnd);

const freshFooter = freshIndexHtml.slice(
  freshIndexHtml.indexOf('<footer'),
  freshIndexHtml.indexOf('</footer>') + '</footer>'.length
);

// Map categories with their live site metadata and icons
const categoriesConfig = [
  { name: "SEO & AI Search", icon: "search", desc: "Technical SEO, Knowledge Graphs, AI Overviews, and Pune Google 3-Pack domination." },
  { name: "Market Intelligence & Pricing", icon: "bar-chart-2", desc: "Authoritative benchmarks, agency pricing comparisons, and ROI breakdowns." },
  { name: "Google Ads & Meta Ads", icon: "target", desc: "High-ROAS search funnels, Meta retargeting, LinkedIn B2B, and conversion tracking." },
  { name: "Web Development & Website Performance", icon: "code", desc: "Next.js, Vite, sub-second LCP optimization, custom web applications, and mobile apps." },
  { name: "Shopify, WordPress & Conversion Optimization", icon: "mouse-pointer", desc: "Headless Shopify, hardened WordPress architectures, and CRO checkout funnels." },
  { name: "AI Solutions & Modern Search Architecture", icon: "cpu", desc: "Generative Engine Optimization (GEO), ChatGPT citations, and AI search workflows." },
  { name: "Brand Identity & Corporate Design", icon: "pen-tool", desc: "Enterprise logos, luxury business cards, executive stationery, and brand naming." },
  { name: "Strategic Growth & Inbound Marketing", icon: "trending-up", desc: "Content marketing, lifecycle email automation, and omnichannel SMS funnels." }
];

// Highlight first 2 blogs as Featured Guides (matching live site)
const featuredPosts = blogs.slice(0, 2);

function generateCardHtml(blog) {
  return `
    <article class="live-blog-card" data-category="${blog.category}" data-search="${(blog.title + ' ' + blog.focusKeyword + ' ' + blog.category + ' ' + blog.intro + ' ' + blog.relatedKeywords.join(' ')).toLowerCase()}">
      <a href="/blog/${blog.slug}.html" class="live-blog-card-img-wrap" tabindex="-1" aria-hidden="true">
        <img src="${blog.image}" alt="${blog.focusKeyword}" loading="lazy" />
      </a>
      <div class="live-blog-card-content">
        <div class="live-blog-card-meta">
          <span class="live-blog-card-cat">${blog.category}</span>
          <span class="live-blog-card-dot">&bull;</span>
          <span>${blog.readingTime}</span>
        </div>
        <h3 class="live-blog-card-title">
          <a href="/blog/${blog.slug}.html">${blog.title}</a>
        </h3>
        <p class="live-blog-card-excerpt">${blog.intro.slice(0, 155)}...</p>
        <div class="live-blog-card-footer">
          <span class="live-blog-card-date">${blog.date}</span>
          <a href="/blog/${blog.slug}.html" class="live-blog-read-btn">
            <span>Read Guide</span>
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
          </a>
        </div>
      </div>
    </article>`;
}

const featuredCardsHtml = featuredPosts.map(blog => `
  <div class="live-featured-card">
    <div class="live-featured-img-wrap">
      <img src="${blog.image}" alt="${blog.focusKeyword}" loading="eager" />
      <span class="live-featured-badge">Featured Strategy Guide</span>
    </div>
    <div class="live-featured-body">
      <div class="live-blog-card-meta">
        <span class="live-blog-card-cat">${blog.category}</span>
        <span class="live-blog-card-dot">&bull;</span>
        <span>${blog.date}</span>
        <span class="live-blog-card-dot">&bull;</span>
        <span>${blog.readingTime}</span>
      </div>
      <h3 class="live-featured-title">
        <a href="/blog/${blog.slug}.html">${blog.title}</a>
      </h3>
      <p class="live-featured-desc">${blog.intro}</p>
      
      <div class="live-featured-tags">
        ${blog.relatedKeywords.slice(0, 3).map(kw => `<span class="live-tag">#${kw}</span>`).join('')}
      </div>

      <div class="live-featured-action">
        <span class="live-featured-focus">Primary: <strong>${blog.focusKeyword}</strong></span>
        <a href="/blog/${blog.slug}.html" class="live-btn-primary">
          <span>Read complete guide</span>
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
        </a>
      </div>
    </div>
  </div>
`).join('\n');

const categorySectionsHtml = categoriesConfig.map(cat => {
  const posts = blogs.filter(b => b.category === cat.name);
  if (posts.length === 0) return '';
  return `
    <section class="live-cat-section" id="cat-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">
      <div class="live-cat-header">
        <div>
          <h2 class="live-cat-title">${cat.name}</h2>
          <p class="live-cat-desc">${cat.desc}</p>
        </div>
        <span class="live-cat-count">${posts.length} Guides</span>
      </div>
      <div class="live-cards-grid">
        ${posts.map(generateCardHtml).join('\n')}
      </div>
    </section>
  `;
}).join('\n');

const fullBlogHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Digital Growth Blog | SEO, Web Development &amp; Ads Insights | Inrank Technologies</title>
  <meta name="description" content="Read practical insights on SEO, AI search, web development, Google Ads, Meta Ads, Shopify, WordPress and conversion optimization from Pune's leading performance engineering team." />
  <meta name="keywords" content="digital marketing blog pune, web development guides pune, seo playbooks, generative engine optimization, pricing comparisons, inrank blog" />
  <link rel="canonical" href="https://www.inranktech.com/blog.html" />
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Inrank Technologies" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Digital Growth Blog | SEO, Web Development &amp; Ads Insights" />
  <meta property="og:description" content="Read practical insights on SEO, AI search, web development, Google Ads, Meta Ads, Shopify, WordPress and conversion optimization." />
  <meta property="og:url" content="https://www.inranktech.com/blog.html" />
  <meta property="og:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Digital Growth Blog | SEO, Web Development &amp; Ads Insights" />
  <meta name="twitter:description" content="Read practical insights on SEO, AI search, web development, Google Ads, Meta Ads, Shopify, WordPress and conversion optimization." />
  <meta name="twitter:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Schema.org JSON-LD (Matching live website) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.inranktech.com/blog.html#blog",
    "name": "Inrank Technologies Digital Growth Blog",
    "url": "https://www.inranktech.com/blog.html",
    "description": "Practical guides on SEO, AI search, web performance, paid ads, Shopify and CRO.",
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": "https://www.inranktech.com/img/inrank-white-logo.svg"
    }
  }
  </script>

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/img/inrank-white-logo.svg" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;850&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />

  <!-- Core Styles -->
  <link rel="stylesheet" href="/css/corporate.css" />
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/blog.css" />
  <style>
    /* Live Site Blog Hub Structure Styles */
    .live-hub-hero {
      padding: calc(var(--nav-h) + 2.5rem) 0 3rem;
      background: radial-gradient(circle at 80% 20%, rgba(0, 157, 73, 0.12) 0%, transparent 60%), #ffffff;
      border-bottom: 1px solid #eef2f6;
    }
    .live-hub-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.82rem;
      color: #64748b;
      margin-bottom: 1.5rem;
    }
    .live-hub-breadcrumbs a {
      color: #64748b;
      text-decoration: none;
    }
    .live-hub-breadcrumbs a:hover {
      color: #009d49;
    }
    .live-hub-kicker {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #009d49;
      margin-bottom: 0.75rem;
    }
    .live-hub-title {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      font-weight: 850;
      color: #081424;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin: 0 0 1rem;
      max-width: 820px;
    }
    .live-hub-desc {
      font-size: clamp(1.05rem, 1.4vw, 1.2rem);
      color: #64748b;
      line-height: 1.6;
      max-width: 760px;
      margin: 0;
    }

    /* 2-Column Hub Layout: 9/12 Main Articles + 3/12 Sidebar */
    .live-hub-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 340px;
      gap: 3.5rem;
      padding: 3.5rem 0 5rem;
      align-items: start;
    }
    @media (max-width: 991px) {
      .live-hub-layout {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    /* Featured Guides Grid */
    .live-featured-section {
      margin-bottom: 3.5rem;
    }
    .live-section-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      border-bottom: 1px solid #eef2f6;
      padding-bottom: 0.85rem;
      margin-bottom: 1.5rem;
    }
    .live-section-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: #081424;
      margin: 0;
      letter-spacing: -0.02em;
    }
    .live-featured-grid {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .live-featured-card {
      display: grid;
      grid-template-columns: 340px 1fr;
      background: #ffffff;
      border: 1px solid #eef2f6;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(8, 20, 36, 0.04);
      transition: all 0.25s ease;
    }
    @media (max-width: 768px) {
      .live-featured-card {
        grid-template-columns: 1fr;
      }
    }
    .live-featured-card:hover {
      transform: translateY(-3px);
      border-color: #009d49;
      box-shadow: 0 12px 32px rgba(8, 20, 36, 0.08);
    }
    .live-featured-img-wrap {
      position: relative;
      background: #081424;
      min-height: 220px;
      overflow: hidden;
    }
    .live-featured-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .live-featured-card:hover .live-featured-img-wrap img {
      transform: scale(1.03);
    }
    .live-featured-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      background: #009d49;
      color: #ffffff;
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 10px;
      border-radius: 6px;
    }
    .live-featured-body {
      padding: 1.75rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .live-featured-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: #081424;
      line-height: 1.3;
      margin: 0.5rem 0 0.75rem;
    }
    .live-featured-title a {
      color: inherit;
      text-decoration: none;
    }
    .live-featured-title a:hover {
      color: #009d49;
    }
    .live-featured-desc {
      font-size: 0.92rem;
      color: #475569;
      line-height: 1.6;
      margin: 0 0 1.25rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .live-featured-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 1.25rem;
    }
    .live-tag {
      font-size: 0.72rem;
      font-family: monospace;
      color: #64748b;
      background: #f1f5f9;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .live-featured-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f1f5f9;
      padding-top: 1rem;
    }
    .live-featured-focus {
      font-size: 0.78rem;
      color: #64748b;
    }
    .live-featured-focus strong {
      color: #081424;
    }
    .live-btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      font-weight: 750;
      color: #009d49;
      text-decoration: none;
    }
    .live-btn-primary svg {
      transition: transform 0.2s ease;
    }
    .live-btn-primary:hover svg {
      transform: translateX(4px);
    }

    /* Live Site 2-Column Cards Grid */
    .live-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 3.5rem;
    }
    @media (max-width: 640px) {
      .live-cards-grid {
        grid-template-columns: 1fr;
      }
    }
    .live-blog-card {
      background: #ffffff;
      border: 1px solid #eef2f6;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(8, 20, 36, 0.03);
      display: flex;
      flex-direction: column;
      transition: all 0.25s ease;
    }
    .live-blog-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 24px rgba(8, 20, 36, 0.07);
      border-color: #cbd5e1;
    }
    .live-blog-card-img-wrap {
      position: relative;
      aspect-ratio: 16 / 9;
      background: #f8fafc;
      overflow: hidden;
    }
    .live-blog-card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .live-blog-card:hover .live-blog-card-img-wrap img {
      transform: scale(1.03);
    }
    .live-blog-card-content {
      padding: 1.5rem 1.4rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .live-blog-card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      color: #64748b;
      margin-bottom: 0.5rem;
    }
    .live-blog-card-cat {
      font-size: 0.72rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #009d49;
    }
    .live-blog-card-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: #081424;
      line-height: 1.35;
      margin: 0 0 0.65rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .live-blog-card-title a {
      color: inherit;
      text-decoration: none;
    }
    .live-blog-card-title a:hover {
      color: #009d49;
    }
    .live-blog-card-excerpt {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.55;
      margin: 0 0 1.25rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }
    .live-blog-card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #f1f5f9;
      padding-top: 0.85rem;
    }
    .live-blog-card-date {
      font-size: 0.75rem;
      color: #94a3b8;
    }
    .live-blog-read-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.82rem;
      font-weight: 750;
      color: #009d49;
      text-decoration: none;
    }

    /* Category Section Headers */
    .live-cat-section {
      margin-bottom: 3.5rem;
    }
    .live-cat-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      border-bottom: 1px solid #eef2f6;
      padding-bottom: 0.85rem;
      margin-bottom: 1.5rem;
      gap: 1rem;
    }
    .live-cat-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: #081424;
      margin: 0 0 4px;
    }
    .live-cat-desc {
      font-size: 0.85rem;
      color: #64748b;
      margin: 0;
    }
    .live-cat-count {
      font-size: 0.75rem;
      font-family: monospace;
      font-weight: 700;
      color: #009d49;
      background: rgba(0, 157, 73, 0.08);
      padding: 4px 10px;
      border-radius: 999px;
      white-space: nowrap;
    }

    /* Sidebar Live Modules */
    .live-hub-sidebar {
      position: sticky;
      top: calc(var(--nav-h) + 1.5rem);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .live-sidebar-card {
      background: #ffffff;
      border: 1px solid #eef2f6;
      border-radius: 16px;
      padding: 1.75rem 1.5rem;
      box-shadow: 0 2px 8px rgba(8, 20, 36, 0.03);
    }
    .live-sidebar-title {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #009d49;
      margin: 0 0 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  </style>
</head>
<body class="bg-corporate">

  <!-- Header -->
  ${freshHeader}

  <!-- Mobile Drawer -->
  ${freshMobDrawer}

  <main id="main">
    
    <!-- Hero / Header Section -->
    <section class="live-hub-hero">
      <div class="shell">
        <nav class="live-hub-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span style="color:#081424;font-weight:700;">Blog Hub</span>
        </nav>

        <span class="live-hub-kicker">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>INRANK INSIGHTS</span>
        </span>
        <h1 class="live-hub-title">Digital Growth Insights</h1>
        <p class="live-hub-desc">
          Actionable guides on SEO, AI search, web development, paid ads, Shopify, WordPress and conversion optimization for businesses that want smarter digital growth.
        </p>
      </div>
    </section>

    <!-- Main 2-Column Layout (Matching Live Site) -->
    <div class="shell">
      <div class="live-hub-layout">
        
        <!-- Main Content Area: Featured Guides, Search & Category Sections -->
        <div class="live-hub-main">
          
          <!-- Featured Guides Block -->
          <section class="live-featured-section">
            <div class="live-section-title-row">
              <h2 class="live-section-title">Featured Strategy Guides</h2>
              <span style="font-size:0.75rem;color:#64748b;font-weight:700;">2 Benchmarks</span>
            </div>
            <div class="live-featured-grid">
              ${featuredCardsHtml}
            </div>
          </section>

          <!-- Search All Guides Input -->
          <section class="live-featured-section">
            <div class="live-section-title-row">
              <h2 class="live-section-title">Latest Articles</h2>
              <div class="blog-search-box" style="width:min(320px, 100%);">
                <svg class="blog-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" id="live-search-input" placeholder="Search all 30+ guides..." style="padding:10px 16px 10px 42px;font-size:0.85rem;" />
              </div>
            </div>

            <!-- All Latest Articles Grid -->
            <div class="live-cards-grid" id="live-articles-grid">
              ${blogs.map(generateCardHtml).join('\n')}
            </div>

            <div id="live-empty-state" style="display:none;padding:3rem 1rem;text-align:center;border:1px dashed #cbd5e1;border-radius:14px;">
              <h4 style="font-size:1.1rem;font-weight:800;color:#081424;margin-bottom:4px;">No matching articles found</h4>
              <p style="font-size:0.85rem;color:#64748b;">Try searching for "SEO", "Pricing", "Next.js", "WordPress", or "Pune".</p>
            </div>
          </section>

          <!-- Grouped Category Sections (Exact Structure from Live Site) -->
          <div id="category-sections-wrapper">
            ${categorySectionsHtml}
          </div>

        </div>

        <!-- Sidebar Modules (Exact Structure from Live Site) -->
        <aside class="live-hub-sidebar">
          
          <!-- Module 1: Editorial Trust (Author Snapshot) -->
          <div class="live-sidebar-card" style="text-align:center;">
            <div class="live-sidebar-title">
              <span>EDITORIAL TRUST</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div style="width:72px;height:72px;border-radius:50%;overflow:hidden;margin:0 auto 12px;border:2px solid #009d49;background:#081424;">
              <img src="/images/lead-engineer.jpg" alt="Senior Growth Engineering Lead" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='/img/inrank-white-logo.svg';" />
            </div>
            <h4 style="font-size:0.95rem;font-weight:800;color:#081424;margin:0 0 2px;">Senior Growth Engineer</h4>
            <span style="font-size:0.75rem;color:#009d49;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;display:block;margin-bottom:10px;">Technical Lead &amp; Growth Architect</span>
            <p style="font-size:0.82rem;color:#64748b;line-height:1.55;margin:0;">
              Our engineering team brings 8+ years executing high-performance technical SEO, custom web architectures, and server-side tracking pipelines in Pune.
            </p>
          </div>

          <!-- Module 2: Agency White-Label Outsourcing -->
          <div class="live-sidebar-card">
            <div class="live-sidebar-title">
              <span>AGENCY WHITE-LABEL</span>
              <span style="font-size:0.68rem;font-family:monospace;font-weight:800;color:#009d49;background:rgba(0,157,73,0.1);padding:2px 6px;border-radius:4px;">100% NDA</span>
            </div>
            <h4 style="font-size:1.05rem;font-weight:800;color:#081424;margin:0 0 6px;">Outsource Growth Fulfillment</h4>
            <p style="font-size:0.82rem;color:#64748b;line-height:1.55;margin:0 0 14px;">
              Digital marketing agencies worldwide outsource SEO campaigns, custom web development, and paid ad tracking to Inrank under strict non-disclosure agreements.
            </p>
            <a href="/contact.html" style="display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:10px 14px;border:1.5px solid #009d49;border-radius:8px;color:#009d49;font-size:0.82rem;font-weight:800;text-decoration:none;transition:all 0.2s ease;">
              <span>Partner With Inrank</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>

          <!-- Module 3: Commercial Service Areas -->
          <div class="live-sidebar-card">
            <div class="live-sidebar-title">
              <span>OUR SERVICE AREAS</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
              <li><a href="/services/seo-company-pune.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; Technical SEO Company Pune</a></li>
              <li><a href="/services/custom-website-development.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; Custom Web Development</a></li>
              <li><a href="/services/google-ads-agency.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; Google Ads &amp; PPC Management</a></li>
              <li><a href="/services/ai-seo-services.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; Generative Engine (GEO)</a></li>
              <li><a href="/services/ecommerce-development-company-pune.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; E-Commerce Web Engineering</a></li>
              <li><a href="/services/wordpress-development-services.html" style="font-size:0.84rem;color:#334155;text-decoration:none;font-weight:600;">&bull; WordPress Hardening &amp; Speed</a></li>
            </ul>
          </div>

        </aside>

      </div>
    </div>

    <!-- Commercial Growth CTA Section -->
    <section class="closing-section" id="contact">
      <div class="shell">
        <span class="eyebrow-pill">ACCELERATE COMMERCIAL GROWTH</span>
        <div class="closing-grid">
          <div class="closing-card card-dark">
            <h2 class="closing-title">Ready to implement these benchmarks in your business?</h2>
            <p class="closing-desc">Talk directly to Prasad Mhaske and our senior growth engineering pod about your search rankings, website architecture, and revenue targets.</p>
            <a href="/contact.html" class="closing-cta-link">
              <span>Book a Free Strategy Consultation</span>
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
          <div class="closing-card card-light">
            <h2 class="closing-title">Speak directly with an engineer, not a salesperson.</h2>
            <p class="closing-desc">Schedule an in-person meeting at our Baner technical lab or connect over Google Meet.</p>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="closing-contact-link">
                <strong>Message on WhatsApp (+91 87888 23182)</strong>
              </a>
              <a href="tel:+918788823182" class="closing-contact-link" style="color:#081424;">
                <span>Or call directly: <strong>+91 87888 23182</strong></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  ${freshFooter}

  <script src="/js/core.js"></script>
  <script>
    // Live Search Handler
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('live-search-input');
      const cards = document.querySelectorAll('#live-articles-grid .live-blog-card');
      const emptyState = document.getElementById('live-empty-state');
      const categorySections = document.getElementById('category-sections-wrapper');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          const term = e.target.value.toLowerCase().trim();
          let visibleCount = 0;

          if (term.length > 0 && categorySections) {
            categorySections.style.display = 'none';
          } else if (categorySections) {
            categorySections.style.display = 'block';
          }

          cards.forEach(card => {
            const text = card.getAttribute('data-search') || '';
            if (!term || text.includes(term)) {
              card.style.display = 'flex';
              visibleCount++;
            } else {
              card.style.display = 'none';
            }
          });

          if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
          }
        });
      }
    });
  </script>
</body>
</html>`;

// Write to inrank2.0/blog.html
fs.writeFileSync('inrank2.0/blog.html', fullBlogHubHtml, 'utf8');
console.log('[OK] Wrote inrank2.0/blog.html');

// Also write to inrank2.0/blog/index.html (so /blog/ returns 200 OK)
fs.writeFileSync('inrank2.0/blog/index.html', fullBlogHubHtml, 'utf8');
console.log('[OK] Wrote inrank2.0/blog/index.html');

// Also write to ROOT blog.html and ROOT blog/index.html
fs.writeFileSync('blog.html', fullBlogHubHtml, 'utf8');
if (!fs.existsSync('blog')) fs.mkdirSync('blog', { recursive: true });
fs.writeFileSync('blog/index.html', fullBlogHubHtml, 'utf8');
console.log('[OK] Wrote root blog.html and root blog/index.html');

// --------------------------------------------------------------------------
// 4. COPY ALL 30 BLOG PAGES TO ROOT blog/ DIRECTORY TOO
// --------------------------------------------------------------------------
blogs.forEach(b => {
  const inrank2Path = path.join('inrank2.0/blog', `${b.slug}.html`);
  const rootPath = path.join('blog', `${b.slug}.html`);
  if (fs.existsSync(inrank2Path)) {
    fs.copyFileSync(inrank2Path, rootPath);
  }
});
console.log(`[OK] Synchronized all 30 blog pages to root blog/ directory!`);

// --------------------------------------------------------------------------
// 5. UPDATE server.ts WITH EXPLICIT BLOG ROUTES
// --------------------------------------------------------------------------
console.log('Updating server.ts with explicit /blog routes...');
let serverTs = fs.readFileSync('server.ts', 'utf8');

if (!serverTs.includes('app.get(["/blog"')) {
  const blogRoutesCode = `
// Explicit direct route for Blog Hub
app.get(["/blog", "/blog/", "/blog.html"], (req, res) => {
  const candidates = [
    path.join(process.cwd(), "inrank2.0", "blog.html"),
    path.join(process.cwd(), "blog.html"),
    path.join(process.cwd(), "dist", "blog.html"),
    path.join(process.cwd(), "blog", "index.html"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return res.sendFile(c);
  }
  return res.sendFile(path.join(process.cwd(), "index.html"));
});

// Explicit direct route for individual Blog Posts
app.get(["/blog/:id", "/blog/:id.html"], (req, res) => {
  const rawId = req.params.id.replace(/\\.html$/, "");
  const candidates = [
    path.join(process.cwd(), "inrank2.0", "blog", \`\${rawId}.html\`),
    path.join(process.cwd(), "blog", \`\${rawId}.html\`),
    path.join(process.cwd(), "dist", "blog", \`\${rawId}.html\`),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return res.sendFile(c);
  }
  return res.redirect(301, "/blog.html");
});
`;

  // Insert right before app.get(["/our-work"
  serverTs = serverTs.replace('app.get(["/our-work"', blogRoutesCode + '\napp.get(["/our-work"');
  fs.writeFileSync('server.ts', serverTs, 'utf8');
  console.log('[OK] Updated server.ts with explicit /blog and /blog/:id routes!');
}

console.log('=== COMPLETE DEPLOYMENT FINISHED ===');

