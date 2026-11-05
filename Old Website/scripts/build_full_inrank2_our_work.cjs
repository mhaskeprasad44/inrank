const fs = require('fs');

const raw = fs.readFileSync('our-work.html', 'utf8');

// Extract JSON-LD
const jsonLdMatch = raw.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
const jsonLd = jsonLdMatch ? jsonLdMatch[0] : '';

// Extract the portfolio grid section
const secStart = raw.indexOf('id="portfolio-search-input"');
const sec2Start = raw.lastIndexOf('<section', secStart);
const sec2End = raw.indexOf('</section>', secStart) + 10;
const portfolioGridHtml = raw.slice(sec2Start, sec2End);

// Extract the pillars section
const pStart = raw.indexOf('How We Build Category-Dominant Assets');
const pSecStart = raw.lastIndexOf('<section', pStart);
const pSecEnd = raw.indexOf('</section>', pStart) + 10;
const pillarsHtml = raw.slice(pSecStart, pSecEnd);

// Extract the CTA section
const ctaStart = raw.indexOf('Like Our Work? Let\'s Build Your Next Digital Growth Engine.');
const ctaSecStart = raw.lastIndexOf('<section', ctaStart);
const ctaSecEnd = raw.indexOf('</section>', ctaStart) + 10;
const ctaHtml = raw.slice(ctaSecStart, ctaSecEnd);

console.log('Portfolio grid len:', portfolioGridHtml.length);
console.log('Pillars len:', pillarsHtml.length);
console.log('CTA len:', ctaHtml.length);

const ourWorkHtml = `<!doctype html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WLZ75BS8');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Our Work & Selected Web Deployments | Inrank Technologies Pune</title>
  <meta name="description" content="Explore live production websites, e-commerce stores, B2B portals, and search optimization architectures engineered by Inrank Technologies." />
  <link rel="canonical" href="https://www.inranktech.com/our-work.html" />
  <link rel="icon" type="image/png" href="/logo.png" />
  
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Core & Vinove-Inspired Corporate CSS -->
  <link rel="stylesheet" href="/css/core.css" />
  <link rel="stylesheet" href="/css/nav.css" />
  <link rel="stylesheet" href="/css/corporate.css" />

  <!-- Lucide Icons -->
  <script src="/js/lucide.min.js"></script>

  ${jsonLd}
</head>
<body class="bg-body text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">

  <!-- VINOVE 2026 FLOATING DOCK HEADER -->
  <header class="nav-wrap" id="nav-wrap">
    <nav class="nav is-dark" id="nav" aria-label="Main Navigation">
      <div class="nav-inner">
        <!-- Logo -->
        <a href="/" class="nav-brand" aria-label="Inrank Technologies Home">
          <img src="/img/logo.png" alt="Inrank Technologies" class="nav-logo" />
        </a>

        <!-- Desktop Navigation Items -->
        <div class="nav-links">
          <!-- Services Mega Dropdown -->
          <div class="nav-item has-drop">
            <a href="/services.html" class="nav-link" aria-expanded="false" aria-haspopup="true">
              <span>Services</span>
              <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="drop-mega" role="menu">
              <div class="mega-rail">
                <div class="mega-rail-badge">Core Pillars</div>
                <h4 class="mega-rail-title">Full-Stack Digital Growth Engineering</h4>
                <p class="mega-rail-desc">We replace fragmented agencies with an accountable, high-performance growth engineering partner.</p>
                <div class="mega-rail-stats">
                  <div class="rail-stat">
                    <strong>+318%</strong>
                    <span>Organic Traffic</span>
                  </div>
                  <div class="rail-stat">
                    <strong>&lt; 0.8s</strong>
                    <span>Core Web Vitals</span>
                  </div>
                </div>
                <a href="/services.html" class="mega-rail-cta">
                  <span>Explore All 27 Services</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div class="mega-cards">
                <a href="/services.html#pillar-1" class="mega-card" role="menuitem">
                  <div class="mega-card-icon search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Search &amp; AI Discovery</div>
                    <div class="mega-card-desc">SEO Company in Pune, GEO, AI Ranking Citations, GMB 3-Pack Domination.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-2" class="mega-card" role="menuitem">
                  <div class="mega-card-icon web-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Web &amp; E-Commerce</div>
                    <div class="mega-card-desc">Custom Website Development, Shopify Stores, UI/UX Systems &amp; Web Apps.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-3" class="mega-card" role="menuitem">
                  <div class="mega-card-icon ads-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Paid Media &amp; Performance</div>
                    <div class="mega-card-desc">High-ROAS Google Ads, Meta Ads, LinkedIn B2B funnels, and Conversion Rate Optimization.</div>
                  </div>
                </a>
                <a href="/services.html#pillar-4" class="mega-card" role="menuitem">
                  <div class="mega-card-icon brand-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
                  </div>
                  <div class="mega-card-body">
                    <div class="mega-card-title">Brand Identity &amp; Creative</div>
                    <div class="mega-card-desc">Corporate Logo Design, Strategic Brand Naming, Luxury Collateral &amp; Content Authority.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="/pricing.html" class="nav-link">Pricing</a>
          <a href="/our-work.html" class="nav-link active">Our Work</a>
          <a href="/case-studies.html" class="nav-link">Case Studies</a>

          <!-- About Dropdown -->
          <div class="nav-item has-drop">
            <a href="/about.html" class="nav-link" aria-expanded="false" aria-haspopup="true">
              <span>About</span>
              <svg class="drop-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="drop-simple" role="menu">
              <a href="/about.html" class="simple-link" role="menuitem">
                <div class="simple-title">About Inrank</div>
                <div class="simple-desc">Our senior model, operating philosophy &amp; Baner tech lab.</div>
              </a>
              <a href="/index.html#comparison" class="simple-link" role="menuitem">
                <div class="simple-title">Why We Beat Legacy Agencies</div>
                <div class="simple-desc">Direct comparison matrix against traditional Pune firms.</div>
              </a>
              <a href="/index.html#process" class="simple-link" role="menuitem">
                <div class="simple-title">Our 4-Stage Operating Model</div>
                <div class="simple-desc">Audit, Strategy, Launch, and Continuous Optimization.</div>
              </a>
            </div>
          </div>

          <a href="/contact.html" class="nav-link">Contact</a>
        </div>

        <!-- Right Side: Phone Hotline & CTA Button -->
        <div class="nav-actions">
          <a href="tel:+918788823182" class="nav-phone" title="Call Senior Engineer Desk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 87888 23182</span>
          </a>
          <a href="/contact.html" class="nav-cta">
            <span>Get Free Audit</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <!-- Mobile Toggle Button -->
          <button class="nav-burger" id="nav-burger" aria-label="Toggle Navigation Menu" aria-expanded="false">
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
            <span class="burger-bar"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="nav-drawer" id="nav-drawer">
        <div class="drawer-inner">
          <a href="/" class="drawer-link">Home</a>
          <a href="/services.html" class="drawer-link">Services (All 27)</a>
          <a href="/pricing.html" class="drawer-link">Packages &amp; Pricing</a>
          <a href="/our-work.html" class="drawer-link active">Selected Work</a>
          <a href="/case-studies.html" class="drawer-link">Case Studies &amp; Proof</a>
          <a href="/about.html" class="drawer-link">About &amp; Senior Model</a>
          <a href="/contact.html" class="drawer-link">Contact &amp; Baner Lab</a>
          <div class="drawer-foot">
            <a href="tel:+918788823182" class="drawer-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+91 87888 23182 / +91 70386 12280</span>
            </a>
            <a href="/contact.html" class="btn btn-primary w-full">Request 30-Min Strategy Call</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- MAIN WRAPPER -->
  <main id="main-content">

    <!-- HERO SECTION -->
    <section class="hero-subpage">
      <div class="shell text-center">
        <span class="eyebrow">PRODUCTION WORK &amp; VERIFIED BUILDS</span>
        <h1 class="display">Selected Production Deployments</h1>
        <p class="lede max-w-3xl mx-auto">
          Explore 10 verified production web applications and growth systems engineered by Inrank Technologies for Pune, India and international enterprise clients.
        </p>
      </div>
    </section>

    <!-- PORTFOLIO GRID -->
    ${portfolioGridHtml}

    <!-- 4 ENGINEERING PILLARS -->
    ${pillarsHtml}

    <!-- CTA SECTION -->
    ${ctaHtml}

  </main>

  <!-- MULTI-COLUMN CORPORATE FOOTER -->
  <footer class="footer bg-slate-950 text-slate-400 border-t border-slate-800/80">
    <div class="shell py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <!-- Brand Info -->
        <div class="lg:col-span-2">
          <a href="/" class="inline-block mb-4">
            <img src="/img/logo.png" alt="Inrank Technologies" class="h-9 w-auto" />
          </a>
          <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
            Inrank Technologies is Pune’s premier performance-first digital growth partner. We engineer high-converting web applications, execute dominant SEO strategies, and scale profitable paid media campaigns.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a href="https://wa.me/918788823182" target="_blank" rel="noopener" class="social-icon-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:inranktech@gmail.com" class="social-icon-btn" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="tel:+918788823182" class="social-icon-btn" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 1: Engineering -->
        <div>
          <h5 class="footer-col-title">Engineering</h5>
          <ul class="footer-links">
            <li><a href="/services.html#pillar-2">Custom Web Development</a></li>
            <li><a href="/services.html#pillar-2">UI/UX Web Design</a></li>
            <li><a href="/services.html#pillar-2">Shopify Stores</a></li>
            <li><a href="/services.html#pillar-2">WordPress VIP</a></li>
            <li><a href="/services.html#pillar-2">Landing Pages</a></li>
          </ul>
        </div>

        <!-- Col 2: Search & Growth -->
        <div>
          <h5 class="footer-col-title">Search &amp; Growth</h5>
          <ul class="footer-links">
            <li><a href="/services.html#pillar-1">SEO Company in Pune</a></li>
            <li><a href="/services.html#pillar-1">Generative Engine (GEO)</a></li>
            <li><a href="/services.html#pillar-1">Google Maps 3-Pack</a></li>
            <li><a href="/services.html#pillar-3">Google Ads PPC</a></li>
            <li><a href="/services.html#pillar-3">Meta &amp; Instagram Ads</a></li>
          </ul>
        </div>

        <!-- Col 3: Company & Hubs -->
        <div>
          <h5 class="footer-col-title">Pune Service Hubs</h5>
          <ul class="footer-links">
            <li><a href="/contact.html">Baner Technical Lab</a></li>
            <li><a href="/contact.html">Hinjewadi IT Corridor</a></li>
            <li><a href="/contact.html">Wakad &amp; Pimple Saudagar</a></li>
            <li><a href="/contact.html">Kothrud &amp; Shivajinagar</a></li>
            <li><a href="/contact.html">Viman Nagar &amp; Kharadi</a></li>
          </ul>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © 2026 Inrank Technologies. All rights reserved. 100% intellectual property &amp; source code ownership.
        </div>
        <div class="flex items-center gap-6">
          <a href="/privacy-policy.html" class="hover:text-slate-300">Privacy Policy</a>
          <a href="/terms-and-conditions.html" class="hover:text-slate-300">Terms of Service</a>
          <a href="/sitemap.xml" class="hover:text-slate-300">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="/js/core.js"></script>
  <script>
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  </script>
</body>
</html>`;

fs.writeFileSync('inrank2.0/our-work.html', ourWorkHtml, 'utf8');
// Also duplicate or link as portfolio.html
fs.writeFileSync('inrank2.0/portfolio.html', ourWorkHtml, 'utf8');
console.log('✓ inrank2.0/our-work.html and portfolio.html written with all 10 projects!');

