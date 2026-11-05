const fs = require('fs');

const aboutHtml = `<!doctype html>
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
  <title>About Inrank Technologies | Senior Web Development & Growth Engineering Team Pune</title>
  <meta name="description" content="Learn about Inrank Technologies, led by our senior growth engineering team in Baner, Pune. Discover our engineering-first approach to web development, technical SEO, and full-funnel digital growth." />
  <link rel="canonical" href="https://www.inranktech.com/about.html" />
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

  <!-- Structured Data: Organization & AboutPage -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Inrank Technologies",
    "url": "https://www.inranktech.com/about.html",
    "description": "Inrank Technologies is an engineering-first digital growth partner in Pune, India, specializing in sub-second web architecture, technical SEO, and ROI-focused paid media.",
    "publisher": {
      "@type": "Organization",
      "name": "Inrank Technologies",
      "url": "https://www.inranktech.com",
      "logo": "https://www.inranktech.com/logo.png",
      "telephone": "+91 87888 23182",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baner",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      }
    }
  }
  </script>
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
          <a href="/our-work.html" class="nav-link">Our Work</a>
          <a href="/case-studies.html" class="nav-link">Case Studies</a>

          <!-- About Dropdown -->
          <div class="nav-item has-drop">
            <a href="/about.html" class="nav-link active" aria-expanded="false" aria-haspopup="true">
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
          <a href="/our-work.html" class="drawer-link">Selected Work</a>
          <a href="/case-studies.html" class="drawer-link">Case Studies &amp; Proof</a>
          <a href="/about.html" class="drawer-link active">About &amp; Senior Model</a>
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
        <span class="eyebrow">ABOUT INRANK TECHNOLOGIES</span>
        <h1 class="display">Engineering Growth Through <span class="text-gradient">Technical Precision.</span></h1>
        <p class="lede max-w-3xl mx-auto">
          We built Inrank Technologies on a contrarian truth: commercial growth does not come from fluffy agency pitch decks. It comes from sub-second frontend architecture, technical schema dominance, and mathematically disciplined paid acquisition.
        </p>
      </div>
    </section>

    <!-- SECTION 1: LEADERSHIP SPOTLIGHT & THE SENIOR MODEL -->
    <section class="section py-16">
      <div class="shell">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6" data-reveal="fade-up">
            <span class="eyebrow">THE OPERATING PHILOSOPHY</span>
            <h2 class="title">Built by engineers, not agency salespeople.</h2>
            <p class="text-slate-600 text-base leading-relaxed mt-4">
              Traditional digital marketing agencies in Pune operate on an inverted pyramid: senior directors pitch you in boardroom meetings, but the moment you sign the retainer, your brand is handed off to junior interns who learned SEO last month.
            </p>
            <p class="text-slate-600 text-base leading-relaxed mt-3">
              At Inrank Technologies, we dismantled that broken model. When you partner with us, you work directly with our senior growth engineering leads who have 8+ years of technical background building high-converting web applications, setting up server-side CAPI tracking pipelines, and orchestrating category-dominant search campaigns.
            </p>

            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <div class="text-3xl font-black text-emerald-600">8+</div>
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Years Engineering Depth</div>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <div class="text-3xl font-black text-slate-900">50+</div>
                <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Deployments Worldwide</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="fade-up" data-delay="100">
            <div class="founder-card">
              <div class="founder-avatar-wrap">
                <img src="/images/lead-growth-engineer.webp" alt="Senior Growth Engineer" class="founder-img" />
                <div class="founder-badge">Senior Growth Engineer</div>
              </div>
              <blockquote class="founder-quote">
                “When you hire Inrank, you don't get passed to an account manager who learned marketing last month. You work directly with the senior engineer who writes your code and optimizes your campaigns.”
              </blockquote>
              <div class="founder-info">
                <strong>Senior Growth Engineer &amp; Technical Founder</strong>
                <span>Inrank Technologies · Baner, Pune</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 2: 3 CORE OPERATING PILLARS -->
    <section class="section bg-slate-900 text-white" aria-labelledby="pillars-title">
      <div class="shell">
        <div class="section-head text-center max-w-3xl mx-auto" data-reveal="fade-up">
          <span class="eyebrow text-emerald-400">UNCOMPROMISING STANDARDS</span>
          <h2 id="pillars-title" class="title text-white">Why we built Inrank.</h2>
          <p class="subtitle text-slate-300">
            Three non-negotiable principles that dictate every line of code we ship and every ad dollar we manage.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <div class="value-card-dark" data-reveal="fade-up">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <h3 class="value-title">No Vanity Metrics</h3>
            <p class="value-text">We don't report on "impressions" or "engagement clicks". Every single report is tied directly to pipeline, qualified patient inquiries, B2B RFQs, or tracked e-commerce sales.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="50">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <h3 class="value-title">Sub-Second Performance</h3>
            <p class="value-text">Zero bloated WordPress themes or 40+ plugin disasters. We engineer clean static and headless architectures that pass Core Web Vitals on real mobile devices under 0.8 seconds.</p>
          </div>

          <div class="value-card-dark" data-reveal="fade-up" data-delay="100">
            <div class="value-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
            <h3 class="value-title">100% Client Ownership</h3>
            <p class="value-text">You own everything from day one. Full Git repositories, root ad accounts, Google Analytics properties, and hosting domains remain 100% your commercial intellectual property.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 3: GLOBAL REACH & BANER LAB -->
    <section class="section py-16">
      <div class="shell">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6" data-reveal="fade-up">
            <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img src="/images/pune-tech-hub.webp" alt="Baner Pune Tech Hub" class="w-full h-80 object-cover" />
              <div class="p-4 bg-slate-950 text-slate-300 text-xs flex items-center justify-between">
                <span>📍 Baner Engineering Lab · Pune, Maharashtra</span>
                <span class="text-emerald-400 font-semibold">15-Minute Response SLA</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="fade-up" data-delay="100">
            <span class="eyebrow">HEADQUARTERS &amp; GLOBAL DELIVERY</span>
            <h2 class="title">Pune's West Tech Corridor &amp; Beyond.</h2>
            <p class="text-slate-600 text-base leading-relaxed mt-4">
              Our primary engineering laboratory is located in Baner, Pune: positioned at the center of Maharashtra's commercial and technological hub, right next to Hinjewadi, Wakad, and Shivajinagar.
            </p>
            <p class="text-slate-600 text-base leading-relaxed mt-3">
              While rooted in Pune's engineering ecosystem, Inrank powers digital dominance internationally, managing web architectures, SEO pipelines, and paid performance campaigns for high-growth enterprises in San Francisco, CA, across North America, Europe, Australia, and the Middle East.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <span class="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">Baner HQ</span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">Hinjewadi Corridor</span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">San Francisco Hub</span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">GCC / Middle East</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CLOSING CTA -->
    <section class="section bg-slate-900 text-white">
      <div class="shell text-center max-w-3xl mx-auto">
        <span class="eyebrow text-emerald-400">DIRECT CONSULTATION</span>
        <h2 class="title text-white">Ready to upgrade your web engineering?</h2>
        <p class="subtitle text-slate-300 mt-4">
          Skip the pitch decks. Book a free 30-minute growth consultation directly with our senior growth engineers.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact.html" class="btn btn-primary btn-lg">Book Free Consultation</a>
          <a href="/case-studies.html" class="btn btn-secondary btn-lg">Explore Verified Results</a>
        </div>
      </div>
    </section>

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

fs.writeFileSync('inrank2.0/about.html', aboutHtml, 'utf8');
console.log('✓ inrank2.0/about.html written with complete brand profile and senior model!');

