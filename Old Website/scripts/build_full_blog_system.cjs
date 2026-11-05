const fs = require('fs');
const path = require('path');

const blogs = require('./temp_blogs_data.cjs');
console.log(`Starting generation of Blog System with ${blogs.length} articles...`);

// Ensure output directories exist
if (!fs.existsSync('inrank2.0/blog')) {
  fs.mkdirSync('inrank2.0/blog', { recursive: true });
}

// 1. Extract authentic Inrank 2.0 Header, Mobile Drawer, and Footer from index.html
const indexHtml = fs.readFileSync('inrank2.0/index.html', 'utf8');

const headerHtml = indexHtml.slice(indexHtml.indexOf('<header'), indexHtml.indexOf('</header>') + '</header>'.length);

const mobIdx = indexHtml.indexOf('<div id="mob"');
let depth = 0;
let mobEnd = -1;
for (let i = mobIdx; i < indexHtml.length; i++) {
  if (indexHtml.startsWith('<div', i)) depth++;
  else if (indexHtml.startsWith('</div>', i)) {
    depth--;
    if (depth === 0) {
      mobEnd = i + '</div>'.length;
      break;
    }
  }
}
const mobDrawerHtml = indexHtml.slice(mobIdx, mobEnd);
const footerHtml = indexHtml.slice(indexHtml.indexOf('<footer'), indexHtml.indexOf('</footer>') + '</footer>'.length);

// Service ID mapping helper for sidebar and internal links
const SERVICE_MAP = {
  'seo': { title: 'Technical & AI SEO', url: '/services/seo-company-pune.html', auditName: 'Search Dominance & AI Ranking' },
  'web-development': { title: 'Custom Web Development', url: '/services/custom-website-development.html', auditName: 'Speed & Architecture' },
  'web-design': { title: 'Custom Web Design', url: '/services/custom-website-development.html', auditName: 'Speed & UI/UX Design' },
  'ppc': { title: 'PPC Management', url: '/services/ppc-services.html', auditName: 'Google Ads & Paid ROAS' },
  'google-ads': { title: 'Google Ads Agency', url: '/services/google-ads-agency.html', auditName: 'High-Intent Search Ads' },
  'social-media': { title: 'Social Media Marketing', url: '/services/social-media-marketing-pune.html', auditName: 'B2B & Organic Social' },
  'ai-solutions': { title: 'AI Solutions & GEO', url: '/services/ai-seo-services.html', auditName: 'Generative Engine (GEO)' },
  'branding': { title: 'Corporate Brand Identity', url: '/services/corporate-branding-services.html', auditName: 'Brand Strategy & Visuals' },
  'cro': { title: 'Conversion Rate Optimization', url: '/services/conversion-rate-optimization.html', auditName: 'Conversion Funnel & UX' },
  'ecommerce': { title: 'E-Commerce Engineering', url: '/services/ecommerce-development-company-pune.html', auditName: 'E-Commerce Speed & Checkout' },
  'shopify': { title: 'Shopify Development', url: '/services/shopify-developer-pune.html', auditName: 'Shopify Performance' },
  'wordpress': { title: 'WordPress Engineering', url: '/services/wordpress-development-services.html', auditName: 'WordPress Hardening & Speed' },
  'maintenance': { title: 'Website Maintenance', url: '/services/website-maintenance-services.html', auditName: 'Security & SLA Uptime' },
  'app-development': { title: 'Mobile App Development', url: '/services/mobile-app-development-pune.html', auditName: 'Cross-Platform App' },
  'landing-page': { title: 'High-Converting Landing Pages', url: '/services/landing-page-design-services.html', auditName: 'Landing Page Conversion' }
};

function formatMarkdown(str) {
  if (!str) return '';
  return str
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, anchor, url) => {
      const isExt = url.startsWith('http');
      return `<a href="${url}" ${isExt ? 'target="_blank" rel="noopener noreferrer"' : ''}>${anchor}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function renderContentBlock(text) {
  if (!text) return '';
  const blocks = text.split(/\n\n+/);
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('### ')) {
      return `<h3 class="article-h3">${formatMarkdown(trimmed.replace(/^###\s+/, ''))}</h3>`;
    }
    if (trimmed.startsWith('1. ') || /^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split(/\n(?=\d+\.\s+)/);
      return `<ol class="article-content-ol">
        ${items.map(i => `<li>${formatMarkdown(i.replace(/^\d+\.\s+/, ''))}</li>`).join('\n')}
      </ol>`;
    }
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split(/\n(?=[-*]\s+)/);
      return `<ul class="article-content-ul">
        ${items.map(i => `<li>${formatMarkdown(i.replace(/^[-*]\s+/, ''))}</li>`).join('\n')}
      </ul>`;
    }
    return `<p>${formatMarkdown(trimmed)}</p>`;
  }).join('\n');
}

// --------------------------------------------------------------------------
// 2. GENERATE BLOG HUB (/blog.html)
// --------------------------------------------------------------------------
console.log('Generating inrank2.0/blog.html...');

const featuredBlog = blogs[0]; // "Top 5 Digital Marketing & Web Development Agencies in Pune (2026 Review & Pricing Comparison)"
const remainingBlogs = blogs.slice(1);

const categoriesSet = new Set(blogs.map(b => b.category));
const categoriesList = Array.from(categoriesSet);

const blogHubHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Engineering & Growth Architecture Insights | Inrank Technologies Blog</title>
  <meta name="description" content="Data-backed growth engineering playbooks, technical SEO benchmarks, transparent web development pricing comparisons, and AI search architecture from Pune's premier performance agency." />
  <meta name="keywords" content="digital marketing blog pune, web development guides pune, seo playbooks, generative engine optimization, pricing comparisons" />
  <link rel="canonical" href="https://www.inranktech.com/blog.html" />
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Inrank Technologies" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Engineering & Growth Architecture Insights | Inrank Technologies Blog" />
  <meta property="og:description" content="Data-backed growth engineering playbooks, technical SEO benchmarks, and transparent web development pricing comparisons from Pune's premier performance agency." />
  <meta property="og:url" content="https://www.inranktech.com/blog.html" />
  <meta property="og:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Engineering & Growth Architecture Insights | Inrank Technologies Blog" />
  <meta name="twitter:description" content="Data-backed growth engineering playbooks, technical SEO benchmarks, and transparent web development pricing comparisons." />
  <meta name="twitter:image" content="https://www.inranktech.com/images/service-seo.jpg" />

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "Inrank Technologies Growth Architecture & Engineering Blog",
    "description": "Authoritative technical guides, benchmarks, and transparent pricing comparisons for digital marketing and web engineering.",
    "url": "https://www.inranktech.com/blog.html",
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
</head>
<body class="bg-corporate">

  <!-- Header -->
  ${headerHtml}

  <!-- Mobile Drawer -->
  ${mobDrawerHtml}

  <main id="main">
    
    <!-- Hero / Header Section -->
    <section class="blog-hero">
      <div class="shell">
        <span class="blog-hero-kicker">ENGINEERING &amp; GROWTH INSIGHTS</span>
        <h1 class="blog-hero-title">Technical Playbooks &amp; Market Intelligence</h1>
        <p class="blog-hero-desc">
          Data-backed frameworks, sub-second architectural benchmarks, transparent pricing breakdowns, and Generative Engine Optimization (GEO) strategies from Pune's leading performance engineering team.
        </p>

        <!-- Search & Filter Toolbar -->
        <div class="blog-toolbar">
          <div class="blog-search-box">
            <svg class="blog-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="blog-search" placeholder="Search 30+ playbooks by topic, keyword, or technology..." aria-label="Search blog posts" />
          </div>

          <div class="blog-filter-tabs" id="blog-filters">
            <button type="button" class="blog-filter-btn active" data-cat="all">All Playbooks (${blogs.length})</button>
            ${categoriesList.map(cat => {
              const count = blogs.filter(b => b.category === cat).length;
              return `<button type="button" class="blog-filter-btn" data-cat="${cat}">${cat} (${count})</button>`;
            }).join('\n            ')}
          </div>
        </div>

      </div>
    </section>

    <div class="shell">
      
      <!-- Featured Hero Article Card -->
      <section class="blog-featured-wrap">
        <a href="/blog/${featuredBlog.slug}.html" class="blog-featured-card" data-category="${featuredBlog.category}">
          <div class="blog-featured-media">
            <img src="${featuredBlog.image}" alt="${featuredBlog.focusKeyword}" loading="eager" />
            <span class="blog-featured-badge">Featured Benchmark</span>
          </div>
          <div class="blog-featured-content">
            <div class="blog-meta-row">
              <span class="blog-cat-pill">${featuredBlog.category}</span>
              <span class="blog-dot-sep"></span>
              <span>${featuredBlog.date}</span>
              <span class="blog-dot-sep"></span>
              <span>${featuredBlog.readingTime}</span>
            </div>
            <h2 class="blog-featured-title">${featuredBlog.title}</h2>
            <p class="blog-featured-excerpt">${featuredBlog.intro}</p>
            <span class="blog-read-link">
              <span>Read Comprehensive Benchmark</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </span>
          </div>
        </a>
      </section>

      <!-- All Articles Grid -->
      <section>
        <div class="blog-grid" id="blog-grid">
          ${blogs.map((b, idx) => `
            <article class="blog-card" data-category="${b.category}" data-search="${(b.title + ' ' + b.focusKeyword + ' ' + b.category + ' ' + b.relatedKeywords.join(' ')).toLowerCase()}">
              <a href="/blog/${b.slug}.html" class="blog-card-media" tabindex="-1" aria-hidden="true">
                <img src="${b.image}" alt="${b.focusKeyword}" loading="${idx < 6 ? 'eager' : 'lazy'}" />
              </a>
              <div class="blog-card-body">
                <div class="blog-meta-row" style="margin-bottom:0.75rem;">
                  <span class="blog-cat-pill">${b.category}</span>
                  <span class="blog-dot-sep"></span>
                  <span>${b.readingTime}</span>
                </div>
                <h3 class="blog-card-title">
                  <a href="/blog/${b.slug}.html" style="color:inherit;text-decoration:none;">${b.title}</a>
                </h3>
                <p class="blog-card-excerpt">${b.intro.slice(0, 160)}...</p>
                <div class="blog-card-footer">
                  <span style="color:#64748b;font-size:0.78rem;">${b.date}</span>
                  <a href="/blog/${b.slug}.html" class="blog-read-link">
                    <span>Read Guide</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
                  </a>
                </div>
              </div>
            </article>
          `).join('\n          ')}
        </div>

        <!-- Empty Search State -->
        <div id="blog-empty" style="display:none;padding:4rem 1rem;text-align:center;">
          <h3 style="font-size:1.3rem;font-weight:800;color:#081424;margin-bottom:0.5rem;">No matching guides found</h3>
          <p style="color:#64748b;">Try searching for terms like "SEO", "Pricing", "Next.js", "Shopify", or "Pune".</p>
        </div>
      </section>

    </div>

    <!-- Commercial Growth CTA Strip -->
    <section class="closing-section" id="contact" style="margin-top:2rem;">
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
  ${footerHtml}

  <script src="/js/core.js"></script>
  <script>
    // Blog Hub Interactive Filter & Search
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('blog-search');
      const filterBtns = document.querySelectorAll('.blog-filter-btn');
      const cards = document.querySelectorAll('.blog-card');
      const emptyState = document.getElementById('blog-empty');

      let currentCat = 'all';
      let currentTerm = '';

      function applyFilters() {
        let visibleCount = 0;
        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          const searchContent = card.getAttribute('data-search') || '';
          const matchesCat = (currentCat === 'all' || cat === currentCat);
          const matchesSearch = !currentTerm || searchContent.includes(currentTerm);

          if (matchesCat && matchesSearch) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (emptyState) {
          emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCat = btn.getAttribute('data-cat');
          applyFilters();
        });
      });

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentTerm = e.target.value.toLowerCase().trim();
          applyFilters();
        });
      }
    });
  </script>
</body>
</html>`;

fs.writeFileSync('inrank2.0/blog.html', blogHubHtml, 'utf8');
console.log('Saved inrank2.0/blog.html successfully!');

// --------------------------------------------------------------------------
// 3. GENERATE ALL 30 INDIVIDUAL BLOG PAGES (/blog/[slug].html)
// --------------------------------------------------------------------------
console.log(`Generating 30 individual blog pages in inrank2.0/blog/...`);

blogs.forEach((b, idx) => {
  const service = SERVICE_MAP[b.serviceId] || SERVICE_MAP['seo'];
  
  // Topic cluster related links: pick 2 other blogs from the same category or adjacent
  const related = blogs.filter(other => other.slug !== b.slug && other.category === b.category);
  const fallbackRelated = blogs.filter(other => other.slug !== b.slug);
  const clusterPosts = (related.length >= 2 ? related : fallbackRelated).slice(0, 2);

  // Parse sections
  const sectionsHtml = (b.sections && b.sections.length > 0) ? b.sections.map((sec, sIdx) => `
    <section class="article-section" id="deep-dive-${sIdx + 1}">
      <h2 class="article-h2">
        <span class="article-h2-num">#3.${sIdx + 1}</span>
        <span>${sec.heading}</span>
      </h2>
      <div class="article-content">
        ${renderContentBlock(sec.content)}
      </div>
    </section>
  `).join('\n') : '';

  // In-content image / Architecture diagram
  const inContentImageHtml = b.inContentImage ? `
    <figure class="article-diagram-figure">
      <div class="article-diagram-img-wrap">
        <img src="${b.inContentImage.src}" alt="${b.inContentImage.alt}" loading="lazy" />
      </div>
      <figcaption class="article-diagram-caption">
        <span>${b.inContentImage.caption}</span>
        <span class="article-diagram-badge">Inrank Architecture Blueprint</span>
      </figcaption>
    </figure>
  ` : '';

  // Proof metrics
  const proofMetricsHtml = (b.proofMetrics && b.proofMetrics.length > 0) ? `
    <section class="article-section">
      <h3 class="article-h3">${b.proofHeading || 'Verified Engineering Benchmarks'}</h3>
      <div class="article-proof-grid">
        ${b.proofMetrics.map(m => `
          <div class="article-proof-card">
            <span class="article-proof-val">${m.metric}</span>
            <span class="article-proof-lbl">${m.label}</span>
            <span class="article-proof-det">${m.detail}</span>
          </div>
        `).join('\n')}
      </div>
    </section>
  ` : '';

  // Checklist
  const checklistHtml = (b.checklistItems && b.checklistItems.length > 0) ? `
    <section class="article-section" id="checklist">
      <h2 class="article-h2">
        <span class="article-h2-num">#4</span>
        <span>${b.checklistHeading}</span>
      </h2>
      <ul class="article-checklist">
        ${b.checklistItems.map(item => `
          <li class="article-check-item">
            <span class="article-check-icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8.5L6.5 12L13 4"/></svg>
            </span>
            <span class="article-check-text">${formatMarkdown(item)}</span>
          </li>
        `).join('\n')}
      </ul>
    </section>
  ` : '';

  // FAQs and FAQPage Schema items
  const faqSchemaItems = b.faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }));

  const faqsAccordionHtml = b.faqs.map((f, fIdx) => `
    <div class="article-faq-item ${fIdx === 0 ? 'active' : ''}">
      <button type="button" class="article-faq-question" aria-expanded="${fIdx === 0 ? 'true' : 'false'}">
        <span>${f.question}</span>
        <svg class="article-faq-icon" viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 4.5L6 8L9.5 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
      <div class="article-faq-answer">
        <p>${f.answer}</p>
      </div>
    </div>
  `).join('\n');

  // Author information
  const authorName = b.author?.name || 'Prasad Mhaske';
  const authorRole = b.author?.role || 'Lead Software & Growth Architect';
  const authorBio = b.author?.bio || 'Prasad Mhaske is the founder and lead growth engineer at Inrank Technologies Pune, architecting sub-second digital platforms, Generative Engine Optimization (GEO) graphs, and commercial search funnels for SMEs across Maharashtra.';

  // Table of Contents entries
  const tocEntries = [
    { id: 'why-matters', title: b.whyMattersHeading },
    { id: 'mistakes', title: b.mistakesHeading },
    { id: 'what-to-do', title: b.whatToDoHeading },
    ...(b.sections ? b.sections.map((s, sIdx) => ({ id: `deep-dive-${sIdx + 1}`, title: s.heading })) : []),
    { id: 'checklist', title: b.checklistHeading },
    { id: 'faqs', title: 'Expert FAQs & Implementation' }
  ];

  const articleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${b.metaTitle} | Inrank Technologies</title>
  <meta name="description" content="${b.metaDesc}" />
  <meta name="keywords" content="${b.focusKeyword}, ${b.relatedKeywords.join(', ')}" />
  <link rel="canonical" href="https://www.inranktech.com/blog/${b.slug}.html" />
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Inrank Technologies" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${b.metaTitle}" />
  <meta property="og:description" content="${b.metaDesc}" />
  <meta property="og:url" content="https://www.inranktech.com/blog/${b.slug}.html" />
  <meta property="og:image" content="https://www.inranktech.com${b.image}" />
  <meta property="article:published_time" content="2026-10-16" />
  <meta property="article:author" content="${authorName}" />
  <meta property="article:section" content="${b.category}" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${b.metaTitle}" />
  <meta name="twitter:description" content="${b.metaDesc}" />
  <meta name="twitter:image" content="https://www.inranktech.com${b.image}" />

  <!-- Structured Data: BlogPosting Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://www.inranktech.com/blog/${b.slug}.html#blogposting",
    "headline": ${JSON.stringify(b.title)},
    "description": ${JSON.stringify(b.metaDesc)},
    "image": "https://www.inranktech.com${b.image}",
    "datePublished": "2026-10-16",
    "dateModified": "2026-11-04",
    "author": {
      "@type": "Person",
      "name": ${JSON.stringify(authorName)},
      "jobTitle": ${JSON.stringify(authorRole)},
      "url": "https://www.inranktech.com/about.html"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inranktech.com/img/inrank-white-logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.inranktech.com/blog/${b.slug}.html"
    }
  }
  </script>

  <!-- Structured Data: BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inranktech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog Hub",
        "item": "https://www.inranktech.com/blog.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": ${JSON.stringify(b.title)},
        "item": "https://www.inranktech.com/blog/${b.slug}.html"
      }
    ]
  }
  </script>

  <!-- Structured Data: FAQPage Schema (AEO Google Rich Snippets) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ${JSON.stringify(faqSchemaItems, null, 2)}
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
</head>
<body class="bg-corporate">

  <!-- Header -->
  ${headerHtml}

  <!-- Mobile Drawer -->
  ${mobDrawerHtml}

  <main id="main">
    
    <!-- Article Header Section -->
    <header class="article-header">
      <div class="shell">
        
        <!-- Breadcrumb Navigation -->
        <nav class="article-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/blog.html">Blog Hub</a>
          <span>/</span>
          <span class="article-breadcrumb-current">${b.category}</span>
        </nav>

        <div class="article-kicker-row">
          <span class="article-category">${b.category}</span>
          <span class="article-pillar-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>Verified 2026 Strategy Guide</span>
          </span>
          <span style="font-size:0.8rem;color:#64748b;">${b.date}</span>
          <span class="blog-dot-sep"></span>
          <span style="font-size:0.8rem;color:#64748b;">${b.readingTime}</span>
        </div>

        <h1 class="article-title">${b.title}</h1>

        <div class="article-author-card">
          <div class="article-author-avatar">
            <span>PM</span>
          </div>
          <div>
            <div class="article-author-name">${authorName}</div>
            <div class="article-author-role">${authorRole} &bull; Inrank Technologies Pune</div>
          </div>
        </div>

      </div>
    </header>

    <!-- Article Content Grid (Two Columns: 8/12 Main Body + 4/12 Sticky Sidebar) -->
    <div class="shell">
      <div class="article-layout">
        
        <!-- Left Column: Article Core Reader -->
        <article class="article-main">
          
          <!-- Hero Image with Alt Text and Caption -->
          <figure class="article-hero-figure">
            <div class="article-hero-img-wrap">
              <img src="${b.image}" alt="${b.title} — ${b.focusKeyword} — Inrank Technologies" loading="eager" />
            </div>
            <figcaption class="article-hero-caption">
              <span>Primary Focus Keyword: <strong>${b.focusKeyword}</strong></span>
              <span style="font-family:monospace;font-weight:700;color:#009d49;">2026 Technical Benchmark</span>
            </figcaption>
          </figure>

          <!-- AEO Direct Quick-Answer Box (CRITICAL FOR AEO & GOOGLE AI OVERVIEWS) -->
          <div class="aeo-quick-answer" role="region" aria-label="Direct Quick Answer">
            <div class="aeo-quick-answer-kicker">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              <span>EXECUTIVE SUMMARY &amp; QUICK ANSWER</span>
            </div>
            <p class="aeo-quick-answer-text">
              ${formatMarkdown(b.intro)}
            </p>
          </div>

          <!-- Section 1: Why It Matters -->
          <section class="article-section" id="why-matters">
            <h2 class="article-h2">
              <span class="article-h2-num">#1</span>
              <span>${b.whyMattersHeading}</span>
            </h2>
            <div class="article-content">
              ${renderContentBlock(b.whyMatters)}
            </div>
          </section>

          <!-- Section 2: Mistakes & Traps -->
          <section class="article-section" id="mistakes">
            <h2 class="article-h2">
              <span class="article-h2-num">#2</span>
              <span>${b.mistakesHeading}</span>
            </h2>
            <div class="article-content">
              ${renderContentBlock(b.mistakes)}
            </div>
          </section>

          <!-- Section 3: What To Do Instead -->
          <section class="article-section" id="what-to-do">
            <h2 class="article-h2">
              <span class="article-h2-num">#3</span>
              <span>${b.whatToDoHeading}</span>
            </h2>
            <div class="article-content">
              ${renderContentBlock(b.whatToDo)}
            </div>
          </section>

          <!-- In-Content Infographic / Architecture Diagram -->
          ${inContentImageHtml}

          <!-- Deep-Dive Subsections -->
          ${sectionsHtml}

          <!-- Quantitative Proof Metrics -->
          ${proofMetricsHtml}

          <!-- Section 4: Implementation Checklist -->
          ${checklistHtml}

          <!-- Topic Cluster: Related Organic Guides (Preserving Linking & PageRank) -->
          <section class="topic-cluster-section">
            <h3 style="font-size:1.1rem;font-weight:800;color:#081424;margin-bottom:0.5rem;display:flex;align-items:center;gap:8px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span>Topic Cluster: Related Growth Guides</span>
            </h3>
            <p style="font-size:0.85rem;color:#64748b;margin:0 0 1rem;">
              Explore related engineering playbooks across our Pune technical knowledge graph:
            </p>
            <div class="topic-cluster-grid">
              ${clusterPosts.map(cp => `
                <a href="/blog/${cp.slug}.html" class="topic-cluster-card">
                  <div class="topic-cluster-cat">${cp.category}</div>
                  <h4 class="topic-cluster-title">${cp.title}</h4>
                  <div style="font-size:0.75rem;color:#64748b;margin-top:8px;">${cp.readingTime} &bull; Internal Guide</div>
                </a>
              `).join('\n')}
            </div>
          </section>

          <!-- Section 5: Expert FAQs Accordion -->
          <section class="article-section" id="faqs" style="border-top:1px solid #e2e8f0;padding-top:2.5rem;margin-top:3.5rem;">
            <h2 class="article-h2">
              <span class="article-h2-num">#5</span>
              <span>Frequently Asked Questions</span>
            </h2>
            <div class="article-faq-wrap">
              ${faqsAccordionHtml}
            </div>
          </section>

          <!-- Commercial Conversion CTA Card -->
          <section class="article-cta-box">
            <h3 class="article-cta-title">Ready to Engineer Measurable Commercial Growth?</h3>
            <p class="article-cta-desc">
              We connect technical decisions directly to search rankings, organic lead velocity, and real revenue generation. Let's discuss your roadmap with zero sales fluff.
            </p>
            <a href="${b.ctaLink || '/contact.html'}" class="article-cta-btn">
              <span>${b.ctaText || 'Schedule Free Architecture Consultation'}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </section>

        </article>

        <!-- Right Column: Sticky Conversion & Architecture Sidebar -->
        <aside class="article-sidebar">
          
          <!-- Card 1: Free Service Audit -->
          <div class="sidebar-card featured-audit">
            <div class="sidebar-card-kicker">
              <span>${service.auditName}</span>
              <span class="sidebar-free-badge">100% Free</span>
            </div>
            <h4 class="sidebar-card-title">Get a Custom Technical Audit For Your Brand</h4>
            <p class="sidebar-card-desc">
              Get an objective, code-level assessment of your current website speed, Google 3-Pack rank, and conversion bottlenecks.
            </p>
            <a href="${service.url}" class="sidebar-audit-btn">
              <span>Explore ${service.title}</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13L13 3M13 3H5M13 3V11"/></svg>
            </a>
          </div>

          <!-- Card 2: Interactive Table of Contents -->
          <div class="sidebar-card">
            <h4 class="toc-title">Table of Contents</h4>
            <ul class="toc-list">
              ${tocEntries.map(entry => `
                <li class="toc-item">
                  <a href="#${entry.id}">${entry.title}</a>
                </li>
              `).join('\n')}
            </ul>
          </div>

          <!-- Card 3: Direct WhatsApp Consultation -->
          <div class="sidebar-card">
            <h4 class="sidebar-card-title" style="font-size:1.05rem;">Direct WhatsApp Consultation</h4>
            <p class="sidebar-card-desc">
              Have questions about your digital growth roadmap? Message Prasad Mhaske directly for technical feedback.
            </p>
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener noreferrer" class="sidebar-wa-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>Message +91 87888 23182</span>
            </a>
          </div>

        </aside>

      </div>
    </div>

  </main>

  <!-- Footer -->
  ${footerHtml}

  <script src="/js/core.js"></script>
  <script>
    // FAQ Accordion Handler
    document.addEventListener('DOMContentLoaded', () => {
      const faqItems = document.querySelectorAll('.article-faq-item');
      faqItems.forEach(item => {
        const btn = item.querySelector('.article-faq-question');
        if (btn) {
          btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => {
              i.classList.remove('active');
              const b = i.querySelector('.article-faq-question');
              if (b) b.setAttribute('aria-expanded', 'false');
            });
            if (!isActive) {
              item.classList.add('active');
              btn.setAttribute('aria-expanded', 'true');
            }
          });
        }
      });
    });
  </script>
</body>
</html>`;

  const outFilePath = path.join('inrank2.0/blog', `${b.slug}.html`);
  fs.writeFileSync(outFilePath, articleHtml, 'utf8');
});

console.log(`Generated all ${blogs.length} individual blog pages in inrank2.0/blog/!`);

// --------------------------------------------------------------------------
// 4. UPDATE SITEMAPS (sitemap.xml, llms.txt, llms-full.txt)
// --------------------------------------------------------------------------
console.log('Updating sitemap.xml, llms.txt, and llms-full.txt...');

let sitemap = fs.readFileSync('sitemap.xml', 'utf8');

// Check Dravya Financial
if (!sitemap.includes('/our-work/dravyafinancial.html')) {
  const dravyaSitemapEntry = `  <url>
    <loc>https://www.inranktech.com/our-work/dravyafinancial.html</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.inranktech.com/case-studies/dravyafinancial.html</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>`;
  sitemap = sitemap.replace('</urlset>', dravyaSitemapEntry + '\n</urlset>');
}

// Add Blog Hub
if (!sitemap.includes('https://www.inranktech.com/blog.html')) {
  const blogHubSitemapEntry = `  <url>
    <loc>https://www.inranktech.com/blog.html</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  sitemap = sitemap.replace('</urlset>', blogHubSitemapEntry + '\n</urlset>');
}

// Add all 30 blogs
blogs.forEach(b => {
  const blogUrl = `https://www.inranktech.com/blog/${b.slug}.html`;
  if (!sitemap.includes(blogUrl)) {
    const entry = `  <url>
    <loc>${blogUrl}</loc>
    <lastmod>2026-11-04</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    sitemap = sitemap.replace('</urlset>', entry + '\n</urlset>');
  }
});

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Updated sitemap.xml with Dravya Financial and all 30 blogs!');

// Update llms.txt and llms-full.txt
let llms = fs.readFileSync('llms.txt', 'utf8');
if (!llms.includes('/our-work/dravyafinancial.html')) {
  llms += '\n- [Dravya Financial Solutions](https://www.inranktech.com/our-work/dravyafinancial.html): Institutional Wealth Advisory & High-Yield Portfolio Management Platform';
}
if (!llms.includes('/blog.html')) {
  llms += '\n- [Inrank Technical & Growth Blog](https://www.inranktech.com/blog.html): 30+ Performance Engineering & AI Search Guides';
}
blogs.forEach(b => {
  const url = `https://www.inranktech.com/blog/${b.slug}.html`;
  if (!llms.includes(url)) {
    llms += `\n- [${b.title}](${url}): ${b.metaDesc}`;
  }
});
fs.writeFileSync('llms.txt', llms, 'utf8');

let llmsFull = fs.readFileSync('llms-full.txt', 'utf8');
if (!llmsFull.includes('/our-work/dravyafinancial.html')) {
  llmsFull += '\n- [Dravya Financial Solutions](https://www.inranktech.com/our-work/dravyafinancial.html): Institutional Wealth Advisory & High-Yield Portfolio Management Platform';
}
if (!llmsFull.includes('/blog.html')) {
  llmsFull += '\n- [Inrank Technical & Growth Blog](https://www.inranktech.com/blog.html): 30+ Performance Engineering & AI Search Guides';
}
blogs.forEach(b => {
  const url = `https://www.inranktech.com/blog/${b.slug}.html`;
  if (!llmsFull.includes(url)) {
    llmsFull += `\n- [${b.title}](${url}): ${b.metaDesc}`;
  }
});
fs.writeFileSync('llms-full.txt', llmsFull, 'utf8');
console.log('Updated llms.txt and llms-full.txt!');

console.log('--- BLOG SYSTEM BUILD COMPLETE ---');

