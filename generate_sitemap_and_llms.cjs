const fs = require('fs');
const path = require('path');

const today = '2026-10-26';

// 1. Core static pages
const corePages = [
  { url: 'https://inranktech.com/', priority: '1.0', changefreq: 'daily', title: 'Home - Digital Marketing & Web Development Services in Pune' },
  { url: 'https://inranktech.com/pricing.html', priority: '0.95', changefreq: 'weekly', title: 'Transparent Pricing & Packages (Starter, Growth, Scale)' },
  { url: 'https://inranktech.com/contact.html', priority: '0.90', changefreq: 'weekly', title: 'Contact Inrank Technologies Pune & Free Growth Consultation' },
  { url: 'https://inranktech.com/website-design-company-in-pune.html', priority: '0.95', changefreq: 'weekly', title: 'Website Design Company in Pune Power Hub' },
  { url: 'https://inranktech.com/digital-marketing-agency-in-pune.html', priority: '0.95', changefreq: 'weekly', title: 'Digital Marketing Agency in Pune Power Hub' },
  { url: 'https://inranktech.com/our-work.html', priority: '0.95', changefreq: 'weekly', title: 'Our Work Showcase & Portfolio' },
  { url: 'https://inranktech.com/case-studies.html', priority: '0.95', changefreq: 'weekly', title: 'Verified Client Case Studies & Commercial ROI Metrics' },
  { url: 'https://inranktech.com/portfolio.html', priority: '0.90', changefreq: 'weekly', title: 'Complete Client Portfolio & Deliverable Showcase' },
  { url: 'https://inranktech.com/google-business-profile-top3.html', priority: '0.85', changefreq: 'weekly', title: 'Google Business Profile (GBP) Top 3 Domination Blueprint' },
  { url: 'https://inranktech.com/justdial-profile.html', priority: '0.85', changefreq: 'weekly', title: 'Justdial Business Profile Optimization Dossier' },
  { url: 'https://inranktech.com/homepage-2.html', priority: '0.85', changefreq: 'weekly', title: 'Performance Paid Advertising & Growth Pod (Homepage-2)' },
  { url: 'https://inranktech.com/homepage-3.html', priority: '0.85', changefreq: 'weekly', title: 'Brand Identity, Creative Craft & Art (Homepage-3)' },
];

// 2. Service Pages (27 pages in inrank-27-service-pages/pages/)
const serviceFiles = fs.readdirSync(path.join(__dirname, 'inrank-27-service-pages/pages'))
  .filter(f => f.endsWith('.html'));

const servicePages = serviceFiles.map(file => {
  const slug = file.replace('.html', '');
  const content = fs.readFileSync(path.join(__dirname, 'inrank-27-service-pages/pages', file), 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*Inrank.*$/i, '').trim() : slug.replace(/-/g, ' ');
  return {
    slug,
    canonicalUrl: `https://inranktech.com/services/${slug}/`,
    htmlUrl: `https://inranktech.com/services/${slug}.html`,
    title,
    priority: '0.90',
    changefreq: 'weekly'
  };
});

// 3. Case Studies (10 pages)
const caseStudyFiles = fs.readdirSync(path.join(__dirname, 'case-studies'))
  .filter(f => f.endsWith('.html'));

const caseStudyPages = caseStudyFiles.map(file => {
  const slug = file.replace('.html', '');
  const content = fs.readFileSync(path.join(__dirname, 'case-studies', file), 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*Inrank.*$/i, '').trim() : slug;
  return {
    slug,
    url: `https://inranktech.com/case-studies/${slug}.html`,
    title,
    priority: '0.85',
    changefreq: 'monthly'
  };
});

// 4. Our Work Project Details (10 pages)
const ourWorkFiles = fs.readdirSync(path.join(__dirname, 'our-work'))
  .filter(f => f.endsWith('.html'));

const ourWorkPages = ourWorkFiles.map(file => {
  const slug = file.replace('.html', '');
  const content = fs.readFileSync(path.join(__dirname, 'our-work', file), 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*Inrank.*$/i, '').trim() : slug;
  return {
    slug,
    url: `https://inranktech.com/our-work/${slug}.html`,
    title,
    priority: '0.85',
    changefreq: 'monthly'
  };
});

// 5. Blog Posts (30 articles from src/blogsData.ts)
const blogsContent = fs.readFileSync(path.join(__dirname, 'src/blogsData.ts'), 'utf8');
const blogRegex = /[\x22']slug[\x22']:\s*[\x22']([^'\x22]+)[\x22'][\s\S]*?[\x22']title[\x22']:\s*[\x22']([^'\x22]+)[\x22']/g;
const blogPosts = [];
let m;
while ((m = blogRegex.exec(blogsContent)) !== null) {
  blogPosts.push({
    slug: m[1],
    title: m[2],
    url: `https://inranktech.com/#/blog/${m[1]}`,
    priority: '0.80',
    changefreq: 'weekly'
  });
}

// 6. Interactive SPA Service Views (27 services from src/servicesData.ts)
const servicesContent = fs.readFileSync(path.join(__dirname, 'src/servicesData.ts'), 'utf8');
const serviceIdRegex = /[\x22']id[\x22']:\s*[\x22']([^'\x22]+)[\x22'][\s\S]*?[\x22']title[\x22']:\s*[\x22']([^'\x22]+)[\x22']/g;
const spaServices = [];
let sm;
while ((sm = serviceIdRegex.exec(servicesContent)) !== null) {
  spaServices.push({
    id: sm[1],
    title: sm[2],
    url: `https://inranktech.com/#/service/${sm[1]}`,
    priority: '0.85',
    changefreq: 'weekly'
  });
}

// 7. Interactive SPA sections
const spaSections = [
  { url: 'https://inranktech.com/#/services', priority: '0.90', changefreq: 'weekly', title: 'Interactive Services Directory' },
  { url: 'https://inranktech.com/#/about-us', priority: '0.80', changefreq: 'monthly', title: 'About Inrank Technologies' },
  { url: 'https://inranktech.com/#/blog', priority: '0.90', changefreq: 'daily', title: 'Inrank Growth Insights & Blog' },
  { url: 'https://inranktech.com/#/contact', priority: '0.80', changefreq: 'monthly', title: 'Consultation Form & Direct Contact' },
];

console.log(`Summary of Indexed Assets:`);
console.log(`- Core Pages:         ${corePages.length}`);
console.log(`- Dedicated Services: ${servicePages.length}`);
console.log(`- Case Studies:       ${caseStudyPages.length}`);
console.log(`- Our Work Projects:  ${ourWorkPages.length}`);
console.log(`- Blog Articles:      ${blogPosts.length}`);
console.log(`- SPA Services:       ${spaServices.length}`);
console.log(`- SPA Sections:       ${spaSections.length}`);

// BUILD SITEMAP.XML
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

function addUrl(loc, priority, changefreq, lastmod = today) {
  sitemapXml += `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

// 1. Core pages
for (const p of corePages) {
  addUrl(p.url, p.priority, p.changefreq);
}

// 2. Dedicated service pages (canonical trailing slash)
for (const s of servicePages) {
  addUrl(s.canonicalUrl, s.priority, s.changefreq);
}

// 3. Case Studies
for (const cs of caseStudyPages) {
  addUrl(cs.url, cs.priority, cs.changefreq);
}

// 4. Our Work
for (const ow of ourWorkPages) {
  addUrl(ow.url, ow.priority, ow.changefreq);
}

// 5. SPA Sections
for (const sp of spaSections) {
  addUrl(sp.url, sp.priority, sp.changefreq);
}

// 6. SPA Services
for (const ss of spaServices) {
  addUrl(ss.url, ss.priority, ss.changefreq);
}

// 7. Blog Posts
for (const b of blogPosts) {
  addUrl(b.url, b.priority, b.changefreq);
}

sitemapXml += `</urlset>\n`;

// Write sitemap.xml to both public/ and root
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Wrote public/sitemap.xml and sitemap.xml successfully.`);

// BUILD LLMS.TXT (llmstxt.org compliant format with rich contextual details)
let llmsTxt = `# Inrank Technologies

> Inrank Technologies is Pune's leading performance digital marketing agency & web development company. We engineer high-conversion websites (starting from ₹11,999 with 5-7 day delivery), data-backed SEO, Generative Engine Optimization (GEO for ChatGPT, Perplexity & Google AI Overviews), high-yield paid ads (Google & Meta), and local Google Business Profile rank domination.

## Agency Overview & Core Attributes
- **Website**: https://inranktech.com
- **Headquarters**: FC Road, Shivaji Nagar, Pune, Maharashtra 411005, India
- **Operating Centers**: Baner & Hinjewadi, Pune
- **Direct WhatsApp & Calling Hotline**: +91 87888 23182
- **Business Email**: inranktech@gmail.com
- **Sitemap Index**: https://inranktech.com/sitemap.xml
- **Transparent Pricing Architecture**:
  - Starter Website: ₹11,999 (5 pages, responsive, 95+ PageSpeed, free domain & SSL, 365 days support)
  - Growth Website: ₹16,999 (10 pages, SEO entity schema, CMS integration, fast turnaround)
  - Scale & Custom Web Applications: ₹35,000 (Full-stack custom app, Razorpay/Stripe, tailored architecture)
  - Organic SEO & Generative Search (GEO) Retainers: Starting from ₹11,999/month

---

## Core Main Pages
${corePages.map(p => `- [${p.title}](${p.url}): Core landing destination for ${p.title}.`).join('\n')}

---

## 27 Dedicated Standalone Service Hubs
${servicePages.map(s => `- [${s.title}](${s.canonicalUrl}): In-depth service capabilities, methodology, deliverables, and client FAQ.`).join('\n')}

---

## Verified Client Case Studies (Commercial ROI & Metrics)
${caseStudyPages.map(cs => `- [${cs.title} Case Study](${cs.url}): Verified commercial results, technical architecture, and ranking leaps for ${cs.slug}.`).join('\n')}

---

## Client Work & Portfolio Deep-Dives
${ourWorkPages.map(ow => `- [${ow.title} Portfolio Project](${ow.url}): Live showcase, UI screenshots, technology stack, and verified deliverables for ${ow.slug}.`).join('\n')}

---

## Authoritative Engineering & Marketing Guides (30 In-Depth Articles)
${blogPosts.map(b => `- [${b.title}](${b.url}): Comprehensive research, step-by-step checklist, common mistakes, and actionable benchmarks.`).join('\n')}

---

## Interactive SPA Service Modules
${spaServices.map(ss => `- [${ss.title} (Interactive View)](${ss.url}): Interactive service drawer and conversion forecaster.`).join('\n')}

---

## Interactive Navigation & App Routes
${spaSections.map(s => `- [${s.title}](${s.url}): Direct single-page application navigation section.`).join('\n')}
`;

// Write llms.txt to both public/ and root
fs.writeFileSync(path.join(__dirname, 'public', 'llms.txt'), llmsTxt, 'utf8');
fs.writeFileSync(path.join(__dirname, 'llms.txt'), llmsTxt, 'utf8');
console.log(`Wrote public/llms.txt and llms.txt successfully.`);

// Mirror service pages to public/services/ for static hosting (trailing-slash and .html access)
const publicServicesDir = path.join(__dirname, 'public', 'services');
if (!fs.existsSync(publicServicesDir)) {
  fs.mkdirSync(publicServicesDir, { recursive: true });
}

for (const s of servicePages) {
  const srcFile = path.join(__dirname, 'inrank-27-service-pages', 'pages', `${s.slug}.html`);
  if (fs.existsSync(srcFile)) {
    const content = fs.readFileSync(srcFile, 'utf8');
    // Mirror as slug.html
    fs.writeFileSync(path.join(publicServicesDir, `${s.slug}.html`), content, 'utf8');
    // Mirror as slug/index.html
    const dir = path.join(publicServicesDir, s.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
  }
}
console.log(`Successfully mirrored ${servicePages.length} service pages into public/services/.`);
