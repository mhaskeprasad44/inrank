const fs = require('fs');
const path = require('path');

console.log('--- RESTORING DRAVYA FINANCIAL EVERYWHERE ---');

// 1. Build Dravya Financial work page and case study page
const dravyaData = {
  slug: 'dravyafinancial',
  name: 'Dravya Financial Solutions Pvt Ltd',
  subtitle: 'Institutional Wealth Advisory & High-Yield Portfolio Management Platform',
  category: 'Wealth Management & Corporate Advisory',
  location: 'Baner & Shivaji Nagar, Pune',
  turnaround: '3 Weeks Turnaround',
  liveUrl: 'https://dravyafinancial.com/',
  pill: '₹4.5Cr+ Inbound AUM',
  screenshot: '/portfolio/screenshots/dravyafinancial.webp',
  metrics: [
    { num: '₹4.5Cr+', label: 'Inbound AUM Influenced', sub: 'Qualified HNIs via search' },
    { num: '92%', label: 'Lead Qualification', sub: 'High net-worth filters' },
    { num: '1.1s', label: 'Load Speed', sub: 'Clean corporate layout' },
    { num: '24/7', label: 'Automated Scheduling', sub: 'Google Calendar sync' }
  ],
  about: 'Dravya Financial provides strategic investment advisory, equity management, and commercial tax planning for entrepreneurs, executives, and high-net-worth families in Pune and Mumbai.',
  challenges: 'Attracting generic retail inquiries rather than qualified high-ticket clients, and lacking the executive digital polish expected by corporate leaders.',
  solutions: 'Constructed an executive wealth management digital portal with interactive portfolio risk assessment calculators, discreet consultation scheduling, and targeted search SEO.',
  deliverables: [
    'Executive corporate brand identity & high-trust financial UI',
    'Interactive portfolio risk diagnostic calculator',
    'Targeted high-intent Google Search campaigns for wealth management',
    'Direct CRM integration with lead qualification scoring'
  ],
  quote: 'Inrank repositioned our digital presence to speak to high-net-worth clients. The quality of our consultation inquiries shifted dramatically.',
  author: 'Rajesh Kulkarni, Chief Investment Officer'
};

// Use an existing split hero work page (e.g. greytothegreen.html) as high-fidelity template
const templateWorkPath = 'inrank2.0/our-work/greytothegreen.html';
if (fs.existsSync(templateWorkPath)) {
  let template = fs.readFileSync(templateWorkPath, 'utf8');

  // Replace Grey To The Green specific details with Dravya Financial details
  let dravyaHtml = template
    .replace(/Grey To The Green \(Quantum Innovation\)/g, dravyaData.name)
    .replace(/Grey To The Green/g, dravyaData.name)
    .replace(/greytothegreen/g, dravyaData.slug)
    .replace(/https:\/\/greytothegreen\.com\//g, dravyaData.liveUrl)
    .replace(/Translating Cutting-Edge Molecular Biology into High-Converting Organic D2C Trust/g, dravyaData.subtitle)
    .replace(/Landscape Architecture & Botanical D2C/g, dravyaData.category)
    .replace(/Bangalore & Pune/g, dravyaData.location)
    .replace(/3\.5 Weeks Turnaround/g, dravyaData.turnaround)
    .replace(/99 PageSpeed Score/g, dravyaData.pill)
    .replace(/\/portfolio\/screenshots\/greytothegreen\.webp/g, dravyaData.screenshot);

  // Replace metrics
  // Check about, challenges, solutions
  dravyaHtml = dravyaHtml
    .replace(/Grey To The Green, under Quantum Innovation, develops scientific botanical formulations[\s\S]*?appeal\./, dravyaData.about)
    .replace(/The previous website suffered from slow load times \(> 4\.8s on 4G\)[\s\S]*?queries\./, dravyaData.challenges)
    .replace(/Inrank re-architected the entire web presence from scratch using lightweight semantic HTML5[\s\S]*?pathways\./, dravyaData.solutions)
    .replace(/Inrank gave us an extraordinary platform\. Our organic search inquiries tripled within 60 days[\s\S]*?competitor\./, dravyaData.quote)
    .replace(/Dr\. Neha Patil, Co-Founder & Head of Research/, dravyaData.author);

  fs.writeFileSync('inrank2.0/our-work/dravyafinancial.html', dravyaHtml, 'utf8');
  console.log('Created: inrank2.0/our-work/dravyafinancial.html');

  if (!fs.existsSync('inrank2.0/case-studies')) fs.mkdirSync('inrank2.0/case-studies', { recursive: true });
  fs.writeFileSync('inrank2.0/case-studies/dravyafinancial.html', dravyaHtml, 'utf8');
  console.log('Created: inrank2.0/case-studies/dravyafinancial.html');
}

// 2. Dravya dropdown card HTML
const dravyaDropCard = `<!-- Box 1: Dravya Financial -->
              <a href="/our-work/dravyafinancial.html" class="work-dropdown-card">
                <div class="work-drop-logo-wrap">
                  <img src="/client-logos/dravya.png" alt="Dravya Financial" class="work-drop-logo" />
                </div>
                <div class="work-drop-info">
                  <h4 class="work-drop-name">Dravya Financial</h4>
                  <span class="work-drop-desc">Wealth management platform</span>
                </div>
              </a>`;

// Scan all HTML files in inrank2.0/
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const allHtmls = getAllHtmlFiles('inrank2.0');
let navUpdatedCount = 0;

allHtmls.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Restore Dravya in desktop dropdown
  if (content.includes('work-dropdown-grid')) {
    // If Hira Grafix was at Box 1, replace it with Dravya Financial
    if (content.includes('<!-- Box 1: Hira Grafix -->') || (content.includes('/our-work/hiragrafix.html') && content.includes('work-dropdown-grid'))) {
      const box1Regex = /<!-- Box 1: [^>]+-->[\s\S]*?<\/a>/;
      if (box1Regex.test(content)) {
        content = content.replace(box1Regex, dravyaDropCard);
        changed = true;
      }
    } else if (!content.includes('dravyafinancial.html') && content.includes('<div class="work-dropdown-grid">')) {
      content = content.replace('<div class="work-dropdown-grid">', '<div class="work-dropdown-grid">\n              ' + dravyaDropCard);
      changed = true;
    }
  }

  // Restore Dravya in mobile drawer (#mob)
  if (content.includes('id="mob-work"') || content.includes('id="mob-acc-work"')) {
    if (!content.includes('/our-work/dravyafinancial.html')) {
      const mobRegex = /(<div\s+class="mob-acc-body"[^>]*>)/;
      if (mobRegex.test(content)) {
        content = content.replace(mobRegex, '$1\n              <a href="/our-work/dravyafinancial.html" class="mob-link">Dravya Financial</a>');
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    navUpdatedCount++;
  }
});

console.log(`Updated navigation in ${navUpdatedCount} HTML files!`);

// 3. Homepage (inrank2.0/index.html) Marquee & Portfolio Grid
let indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');
let indexChanged = false;

// Check marquee
if (!indexHtml.includes('/client-logos/dravya.png') && indexHtml.includes('class="marquee-track"')) {
  const dravyaLogoHtml = `<div class="marquee-logo-card">
              <img src="/client-logos/dravya.png" alt="Dravya Financial" class="marquee-logo-img" />
            </div>`;
  indexHtml = indexHtml.replace('<div class="marquee-track">', '<div class="marquee-track">\n            ' + dravyaLogoHtml);
  indexChanged = true;
  console.log('Restored Dravya Financial in marquee!');
}

// Check Commercial Portfolio Grid on index.html
if (!indexHtml.includes('/our-work/dravyafinancial.html') && indexHtml.includes('class="work-grid"')) {
  const dravyaWorkCard = `<article class="work-card" data-reveal>
              <div class="work-card-media">
                <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Solutions Pvt Ltd" loading="lazy" />
                <div class="work-card-badge">₹4.5Cr+ Inbound AUM</div>
              </div>
              <div class="work-card-body">
                <div class="work-card-meta">
                  <span class="work-category">Wealth Management & Corporate Advisory</span>
                  <span class="work-time">3 Weeks Delivery</span>
                </div>
                <h3 class="work-card-title">Dravya Financial Solutions Pvt Ltd</h3>
                <p class="work-card-desc">Institutional Wealth Advisory & High-Yield Portfolio Management Platform for corporate executives and HNIs.</p>
                <div class="work-card-metrics">
                  <div class="work-metric-item">
                    <span class="work-metric-val">₹4.5Cr+</span>
                    <span class="work-metric-lbl">AUM Influenced</span>
                  </div>
                  <div class="work-metric-item">
                    <span class="work-metric-val">92%</span>
                    <span class="work-metric-lbl">Lead Qualification</span>
                  </div>
                  <div class="work-metric-item">
                    <span class="work-metric-val">1.1s</span>
                    <span class="work-metric-lbl">Load Speed</span>
                  </div>
                </div>
                <a href="/our-work/dravyafinancial.html" class="work-card-link">
                  <span>Explore Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                </a>
              </div>
            </article>`;

  indexHtml = indexHtml.replace('<div class="work-grid">', '<div class="work-grid">\n            ' + dravyaWorkCard);
  indexChanged = true;
  console.log('Restored Dravya Financial in index.html work grid!');
}

if (indexChanged) {
  fs.writeFileSync('inrank2.0/index.html', indexHtml, 'utf8');
}

// 4. our-work.html and portfolio.html
['inrank2.0/our-work.html', 'inrank2.0/portfolio.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    if (!html.includes('dravyafinancial.html') && html.includes('class="work-grid"')) {
      const dravyaCard = `<article class="work-card" data-reveal>
          <div class="work-card-media">
            <img src="/portfolio/screenshots/dravyafinancial.webp" alt="Dravya Financial Solutions Pvt Ltd" loading="lazy" />
            <div class="work-card-badge">₹4.5Cr+ Inbound AUM</div>
          </div>
          <div class="work-card-body">
            <div class="work-card-meta">
              <span class="work-category">Wealth Management</span>
              <span class="work-time">3 Weeks Delivery</span>
            </div>
            <h3 class="work-card-title">Dravya Financial Solutions Pvt Ltd</h3>
            <p class="work-card-desc">Institutional Wealth Advisory & High-Yield Portfolio Management Platform for corporate executives and HNIs.</p>
            <div class="work-card-metrics">
              <div class="work-metric-item">
                <span class="work-metric-val">₹4.5Cr+</span>
                <span class="work-metric-lbl">AUM Influenced</span>
              </div>
              <div class="work-metric-item">
                <span class="work-metric-val">92%</span>
                <span class="work-metric-lbl">Lead Qualification</span>
              </div>
              <div class="work-metric-item">
                <span class="work-metric-val">1.1s</span>
                <span class="work-metric-lbl">Load Speed</span>
              </div>
            </div>
            <a href="/our-work/dravyafinancial.html" class="work-card-link">
              <span>Explore Case Study</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>
        </article>`;
      html = html.replace('<div class="work-grid">', '<div class="work-grid">\n        ' + dravyaCard);
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`Restored Dravya Financial in ${filePath}!`);
    }
  }
});

console.log('--- DRAVYA FINANCIAL FULLY RESTORED ---');

